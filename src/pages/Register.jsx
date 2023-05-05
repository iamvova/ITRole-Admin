import React from 'react'
import styled from 'styled-components'
import ConfirmOrChange from '../components/ConfirmOrChange'
import ForgotPassword from '../components/ForgotPassword'
import LeftRegBar from '../components/LeftRegBar'
import Navbar from '../components/Navbar'
import RegisterFields from '../components/RegisterFields'

const Container = styled.div`
    display: flex;
    min-width: 50%;
    height: 100vh;
`

const Register = () => {
  return (
    <>
        <Navbar />
        <Container>
            <LeftRegBar />
            <RegisterFields />
            {/* <ConfirmOrChange mainTitle={"Confirm email"} title={"Please confirm your email"} desc={"A confirmation email has already been sent to your inbox, if you haven't found it, please check your spam folder"} btnDesc={"go to account login"} /> */}
            {/* <ForgotPassword /> */}
        </Container>
    </>
  )
}

export default Register
