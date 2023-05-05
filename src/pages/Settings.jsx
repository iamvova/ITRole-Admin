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
const FormContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    
`
const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img{
    width: 104px;
    height: 104px;
  }
  & div{
    width: 104px;
    height: 104px;
    background: #D9D9D9;
    border-radius: 100%;
  }
`
const UploadBtn = styled.button`
  cursor: pointer;
  margin: 0 20px;
  background: #FF3607;
  border-radius: 4px;
  border: 0;
  padding: 10px 25px;
  color: #fff;
  text-transform: uppercase;
`
const RemoveBtn = styled.button`
  cursor: pointer;
  background: #D9D9D9;
  border-radius: 4px;
  border: 0;
  padding: 10px 25px;
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-top: 20px;

  & input{
    margin-top: 5px;
    margin-bottom: 30px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 10px;
  }
`
const SubmitBtn = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  background: #FF3607;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
`


const Settings = () => {
  return (
    <Container>
      <h2>Settings</h2>

      <FormContainer>
        <IconBlock>
          {/* <img src={image.profileIcon} alt="profileIcon" /> */}
          <div></div>
          <UploadBtn>Upload</UploadBtn>
          <RemoveBtn>Remove</RemoveBtn>
        </IconBlock>
        <Form>
          <label htmlFor="email">E-mail adress</label>
          <input id='email' type="text" placeholder='user1234@gmail.com' />

          <label htmlFor="name">Name</label>
          <input id='name' type="text" placeholder='Name Female' />

          <label htmlFor="phone">Phone Number</label>
          <input id='phone' type="text" placeholder='+3809723245252' />

          <label htmlFor="password">Enter your new password</label>
          <input id='password' type="text" placeholder='***********************' />

          <SubmitBtn>Submit</SubmitBtn>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Settings
