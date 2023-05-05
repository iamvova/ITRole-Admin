import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'



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

const ForgotPassword = () => {
  return (
    <Container>
      <Title>Forgot Password</Title>
      <Form>
            <Label>New password</Label>
            <Input type="text" placeholder="New password" required />

            <Label>New password again</Label>
            <Input type="text" placeholder="New password again" required />

            <Button>REGISTER</Button>
            <Subtext>Already have an account ?  <A href='!#'> Sign in <AiOutlineArrowRight /></A></Subtext>
      </Form>
    </Container>
  )
}

export default ForgotPassword
