import React from 'react'
import image from '../constants/image'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100vh;
    min-width: 50%;
    color: #fff;
    background-color: #141414;

    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Img = styled.img`

`
const ContainerImg = styled.div`

`
const Title = styled.h1`
    margin-bottom: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;

    color: #FFFFFF;
`
const SubTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;
`

const LeftRegBar = () => {
  return (
    <Container>
        <ContainerImg><Img src={image.regLogo} /></ContainerImg>
        <Title>Welcome to the admin panel</Title>
        <SubTitle>At first, you have to register you’r account</SubTitle>
    </Container>
  )
}

export default LeftRegBar
