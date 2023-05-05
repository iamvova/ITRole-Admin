import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'


const Container = styled.div`
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    background: #F7F8FC;
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & h3{
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.3px;
        color: #252733;
    }
`
const LeftTopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & img{margin-left: 30px;}
    & p{
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        letter-spacing: 0.2px;
        color: #252733;
    }
`
const Hr = styled.hr`
    width: 0px;
    margin: 0 30px;
    height: 30px;
    opacity: .35;
`
const ShortBlocks = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Block = styled.div`
    width: 300px;
    margin: 0 20px;
    &:first-child{margin-left: 0;}
    &:last-child{margin-right: 0;}
    border: 1px solid #DFE0EB;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    background: #fff;

    & p{
        font-size: 19px;
        line-height: 24px;
        letter-spacing: 0.4px;
        color: #9FA2B4;
    }
    & h2{
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 1px;
        color: #252733;
    }
    transition: .3s ease-out;
    &:hover{
        border: 1px solid #3751FF;
        & h2{color: #3751FF;}
    }
`



const Overview = () => {
  return (
    <Container>
        <TopContainer>
            <h3>Overview</h3>
            <LeftTopContainer>
                <img src={image.search} alt="search" />
                <img src={image.messegeIcon} alt="messegeIcon" />
                <Hr></Hr>
                <p>Name Surname</p>
                <img src={image.profileIcon} alt="profileIcon" />
            </LeftTopContainer>
        </TopContainer>
        <ShortBlocks>
            <Block><p>New Designers</p><h2>60</h2></Block>
            <Block><p>New PM`s </p><h2>16</h2></Block>
            <Block><p>New Developers</p><h2>43</h2></Block>
            <Block><p>New DevOps</p><h2>64</h2></Block>
        </ShortBlocks>
    </Container>
  )
}

export default Overview
