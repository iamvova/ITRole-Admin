import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styled from 'styled-components'


const RegFields = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
const Title = styled.h1`
    text-align: center;
    margin-top: 165px;
    margin-bottom: 165px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
`
const RegisterFields = () => {
  return (
    <RegFields>
        <Title>Welcome</Title>
        <Form>
            <Label>Email</Label>
            <Input type="text" placeholder="Email" required />
            
            <Label>Name</Label>
            <Input type="text" placeholder="Name" required/>

            <Label>Password</Label>                    
            <Input type="text" placeholder="Password" required />

            <Label>Confirm password</Label>                    
            <Input type="text" placeholder="Confirm password" required/>

            <Button>REGISTER</Button>
            <Subtext>Already have an account ?  <A href='!#'> Sign in <AiOutlineArrowRight /></A></Subtext>
        </Form>
    </RegFields>
  )
}

export default RegisterFields
