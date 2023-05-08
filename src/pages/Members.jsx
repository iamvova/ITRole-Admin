import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  background: #F7F8FC;
  
  
`
const Title = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #252733;
`
const Content = styled.div``
const ListQuestions = styled.ul`
  list-style: number;
`
const ListItem = styled.li`
  margin-bottom: 20px;
  cursor: pointer;

  &:hover{
    opacity: 0.5;
  }
`
const AddNewQuestionBtn = styled.button`
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #049f04;
    color: #fff;
    border: 0;
    cursor: pointer;

    &:hover{
      opacity: 0.85;
    }
`
const PosAbsolute = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`
const Modal = styled.div`
  height: 900px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 100px;
  left: 0;
  bottom: 0;
  margin-left: 30px;
  margin-right: 30px;
`

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  & input{
    margin-bottom: 30px;
    margin-top: 5px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 10px;
  }
  & input[type=number]{
    padding-top: 7px;
    padding-bottom: 7px;
    font-size: 18px;
  }
`
const ConformBtn = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #049f04;
  color: #fff;
  border: 0;
  cursor: pointer;
  margin-top: 15px;

  &:hover{
    opacity: 0.85;
  }
`
const DeleteBtn = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #b21111;
  color: #fff;
  border: 0;
  cursor: pointer;
  margin-top: 50px;

  &:hover{
    opacity: 0.85;
  }
`
const Close = styled.span`
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
  font-size: 24px;
`
const Members = ({role, token}) => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [error, setError] = useState()
  const [data, setData] = useState()

  const [name, setName] = useState('')
  const [bachelorLink, setBachelorLink] = useState('')
  const [description, setDescription] = useState('')
  const [videoLink, setVideoLink] = useState('')

  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [currentElement, setCurrentElement] = useState([])
  
  useEffect(() => {setTimeout(()=>{setData(role)}, 1500)}, [role])
  
  if(token){
    console.log(token)
  }


  const addNewUser = (e) => {  
  
    const requestBody = {
      "name": name,
      "url_to_program": bachelorLink,
      "description": description,
      "video": videoLink
    }
  
    if (Object.values(requestBody).some(value => value === undefined || value === '')){
      setError('Please fill in all fields')
      console.log(error);
    }
  
    fetch('http://127.0.0.1:8000/api/admin/role/', {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }).then(response => response.json())
      .then(data => {setData(data)})
      .catch(error => setError(error))

    setShowAddModal(false)
  }

  const deleteRole = (id) => {
    fetch(`http://127.0.0.1:8000/api/admin/role/${id}/`, {
      method: 'DELETE',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {setData(data=>data)})
    .catch(error => {setError(error)})
    .finally(() => {setShowAddModal(false)})
  }

  const updateUser = (id) => {  
  
    const requestBody = {
      "name": name,
      "url_to_program": bachelorLink,
      "description": description,
      "video": videoLink
    }
  
    if (Object.values(requestBody).some(value => value === undefined || value === '')){
      setError('Please fill in all fields')
      console.log(error);
    }
  
    fetch('http://127.0.0.1:8000/api/admin/role/', {
      method: 'PUT',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }).then(response => response.json())
      .then(data => {setData(data=>data)})
      .catch(error => setError(error))

    setShowAddModal(false)
  }


  return (
    <PosAbsolute>
      <Container>
          <Title>Add new Role</Title>
          <Content>
            <ListQuestions>

              {data ? data.map((i) => (
                <ListItem 
                  key={i.id} 
                  onClick={()=>{
                    setCurrentElement((prev) => [...prev, i])
                    setShowUpdateModal(true)
                    
                  }} 
                  >{i.name}</ListItem>
              )) : <Loading />}

            </ListQuestions>
            <AddNewQuestionBtn onClick={()=>setShowAddModal(true)}>Add Role</AddNewQuestionBtn>
          </Content>
      </Container>
    
      {showAddModal &&
        <Modal>
          <Close onClick={()=>setShowAddModal(false)}>X</Close>
          <Form onSubmit={(e)=>addNewUser(e)}>
            <label htmlFor="name">Enter name</label>
            <input id='name' name='name' type="text" placeholder='Enter role' value={name} onChange={e => setName(e.target.value)} required/>

            <label htmlFor="bachelorLink">Enter URL to bachelor program: </label>
            <input id='bachelorLink' name='bachelorLink' type="text" placeholder='Enter URL to bachelor program' value={bachelorLink} onChange={e => setBachelorLink(e.target.value)} required/>

            <label htmlFor="description">Enter description</label>
            <input id='description' name='description' type="text" placeholder='Enter description' value={description} onChange={e => setDescription(e.target.value)} required/>

            <label htmlFor="videoLink">Enter video link</label>
            <input type="text" name="videoLink" id="videoLink" placeholder='Enter video link' value={videoLink} onChange={e => setVideoLink(e.target.value)} required />
            {error ? error: <></>}
            <ConformBtn type='submit' onClick={()=> window.location.reload(true)} >Confirm</ConformBtn>
          </Form>
        </Modal>
      }

      {showUpdateModal &&
        <Modal>
          <>{console.log(data, "data")}{currentElement.length > 0 && console.log(currentElement, "1")}</>
          <Close onClick={()=>{
            setShowUpdateModal(false)
            setCurrentElement([])}}>X</Close>
          {currentElement.map((i)=>(
            <Form onSubmit={(e)=>updateUser(e)} key={i.id}>
              <label htmlFor="name">Enter name</label>
              <input id='name' name='name' type="text" placeholder='Enter role' value={i.name} onChange={e => setName(e.target.value)} required/>

              <label htmlFor="bachelorLink">Enter URL to bachelor program: </label>
              <input id='bachelorLink' name='bachelorLink' type="text" placeholder='Enter URL to bachelor program' value={i.url_to_program} onChange={e => setBachelorLink(e.target.value)} required/>

              <label htmlFor="description">Enter description</label>
              <input id='description' name='description' type="text" placeholder='Enter description' value={i.description} onChange={e => setDescription(e.target.value)} required/>

              <label htmlFor="videoLink">Enter video link</label>
              <input type="text" name="videoLink" id="videoLink" placeholder='Enter video link' value={i.video} onChange={e => setVideoLink(e.target.value)} required />
              {error ? error: <></>}
              <DeleteBtn onClick={()=> {
                deleteRole(i.id)
                window.location.reload(true)
                setCurrentElement([])
                }} >Delete</DeleteBtn>
              <ConformBtn type='submit' onClick={()=> {
                window.location.reload(true)
                setCurrentElement([])
                
                }} >Confirm</ConformBtn>
            </Form>
          ))}

        </Modal>
      }    
    </PosAbsolute>
  )
}

export default Members
