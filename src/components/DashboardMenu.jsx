import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../constants/image'
import Question from '../pages/Question'
import Overview from '../pages/Overview'
import Members from '../pages/Members'
import Settings from '../pages/Settings'

const Container = styled.div`
    background: #191919;
`
const ContainerImg = styled.div`
    margin-bottom: 40px;
`
const Img = styled.img``
const Content = styled.div`
    width: 350px;
    color: #fff;
`
const MenuList = styled.ul`
    list-style: none;
    min-width: 100%;
    padding-left: 0;
`
const ListItem = styled.li`
    padding-left: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
    cursor: pointer;

    &:last-child{
        margin-top:10px;
        border-top: 1px solid rgb(223, 224, 235, 0.15);
    }
`
const ImgIcon = styled.img`
    margin-right: 20px;
    font-size: 25px;
`


const DashboardMenu = ({role, question}) => {

    const [page, setPage] = useState()

    const handleClick = (e) => {
        e.target.parentElement.childNodes.forEach(item => item.classList.remove('active'))
        e.target.classList.add('active')
    }


  return (
    <>
        <Container>
            <ContainerImg><Img src={img.dashboardLogo} /></ContainerImg>
            <Content>
                <MenuList onClick={handleClick}>
                    <ListItem onClick={()=>setPage(<Overview />)} className="active"> <ImgIcon src={img.sideMenuLogo1} alt="icon" /> Stats</ListItem>
                    <ListItem onClick={()=>setPage(<Question question={question} roleData={role}  />)}> <ImgIcon src={img.sideMenuLogo2} alt="icon" /> Questions</ListItem>
                    <ListItem onClick={()=>setPage(<Members role={role} />)}> <ImgIcon src={img.sideMenuLogo4} alt="icon" /> Roles</ListItem>
                    <ListItem onClick={()=>setPage(<Overview />)}> <ImgIcon src={img.sideMenuLogo3} alt="icon" /> Results</ListItem>
                    <ListItem onClick={()=>setPage(<Settings />)}> <ImgIcon src={img.sideMenuLogo5} alt="icon" /> Settings</ListItem>
                </MenuList>
            </Content>
        </Container>

        {page ? page : <Overview />}
    </>
  )
}

export default DashboardMenu
