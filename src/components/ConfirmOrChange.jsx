import React from 'react'
import styled from 'styled-components'
import exportImg from '../constants/image'

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
const Content = styled.div`
    width: 460px;
    text-align: center;
`
const ContainerImg = styled.div``
const Img = styled.img``
const DescTitle = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 0;
    color: #000000;

`
const Subtitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 30px;
`
const Button = styled.button`
    padding: 15px 120px;
    text-transform: uppercase;
    background: #FF3607;
    border-radius: 4px;
    border: 1px solid #FF3607;
    color: #fff;
    cursor: pointer;
    transition: .25s ease-out;
    &:hover{
        color: #000;
        background: 0;
    }
`

const ConfirmEmail = ({mainTitle, title, desc, btnDesc}) => {
  return (
    <Container>
       <Title>{mainTitle}</Title>
        <Content>
            <ContainerImg><Img src={exportImg.confirEmail} /></ContainerImg>
            <DescTitle>{title}</DescTitle>
            <Subtitle>{desc}</Subtitle>
            <Button>{btnDesc}</Button>
        </Content>
    </Container>
  )
}

export default ConfirmEmail
