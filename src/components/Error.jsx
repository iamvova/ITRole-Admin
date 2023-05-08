import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Text = styled.h1`
  margin-top: 100px;
  margin-bottom: 0px;
  font-size:60px;
  color: #929191;
`

const P = styled.p`
  cursor: pointer;
  opacity: 0.7;
  &:hover{
    text-decoration: underline;
  }
`
const Error = () => {
  return (
    <Container>
      <Text>Помилка</Text>
      <Link to={'/'}> <P>повернутися на головний екран --{'>'} </P></Link>
    </Container>
  )
}

export default Error
