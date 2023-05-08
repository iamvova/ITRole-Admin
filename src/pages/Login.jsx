import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'
import LeftRegBar from '../components/LeftRegBar'



const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    margin-top: 165px;
    margin-bottom: 165px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Label = styled.label`
    margin-bottom: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    display: flex;
    align-items: center;

    color: #000000;
`
const Input = styled.input`
    padding: 20px 335px 20px 20px;
    margin-bottom: 25px;
    color: #656565;
    border: 1px solid #D6D6D6;
    border-radius: 4px;
`
const Subtext = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`
const Button = styled.button`
    background: #FF3607;
    border-radius: 4px;
    padding: 20px 0;
    border: 1px solid #FF3607;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    transition: .25s ease-out;
    &:hover{
        color: #000;
        background: 0;
    }
`
const A = styled.a`
    color: #FF3607;
    text-decoration: none;
`
const Wrapper = styled.div`
    display: flex;
    min-width: 50%;
    height: 100vh;
`


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [accessToken, setAccessToken] = useState()
    const [access, setAccess] = useState(false)
    const [error, setErorr] = useState()

    const navigate = useNavigate()
    

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://127.0.0.1:8000/api/token/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
        .then(response => response.ok ? response.json() : setPassword(''))
        .then(data => {
            setAccessToken(data.access)
            localStorage.setItem('access_token', JSON.stringify(data.access))  
            console.log(accessToken)
            setAccess(true)          
        })
        .catch(setPassword(''))  
        if (access) {
            navigate('/dashboard', {state: {accessToken: accessToken}})
        }
        
    }

    if(error) console.log(error);
    
  return (
    <Wrapper>
        <LeftRegBar />
        <Container>
            <Title>Login</Title>
            <Form onSubmit={(event)=>handleSubmit(event)}>
                <Label>Email</Label>
                <Input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />

                <Label>Password</Label>
                <Input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                {error ? <>{error}</>:<></>}
                <Button type="submit">Login</Button>
                <Subtext>Forgot password  <A href='!#'> Sign up <AiOutlineArrowRight /></A></Subtext>
            </Form>
        </Container>
    </Wrapper>
  )
}

export default Login
