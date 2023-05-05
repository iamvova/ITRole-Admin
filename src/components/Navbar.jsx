import React from 'react'
import styled from 'styled-components'
import img from '../constants/image'


const Img = styled.img``
const ContainerImg = styled.div``
const Option = styled.option``
const Select = styled.select`
    background: 0;
    border: 0;
    margin-right: 150px;
`
const Container = styled.div`
    padding: 0 50px;
    background: #fff;
    color: #000;
    height: 60px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navbar = () => {
  return (
    <Container>
      <ContainerImg><Img src={img.logo} /></ContainerImg> 
      <Select>
        <Option>EN</Option>
        <Option>UA</Option>
      </Select>
    </Container>
  )
}

export default Navbar
