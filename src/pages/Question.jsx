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
const Content = styled.div`
    
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
    margin-top: 10px;

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

const Question = ({question}) => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [data, setData] = useState()

  const [error, setError] = useState()

  const [name, setName] = useState()
  const [positiveAnswer, setPositiveAnswer] = useState()
  const [negativeAnswer, setNegativeAnswer] = useState()
  const [point, setPoint] = useState()
  const [role, setRole] = useState("Дизайнер")
  const [currentElement, setCurrentElement] = useState([])
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  
  const token = JSON.parse(localStorage.getItem('access_token'))
  

  useEffect(() => {setTimeout(()=>{setData(question)}, 1000)}, [question])


  const addNewQuestion = (event) => {
    event.preventDefault()
    const requestBody = {
      "question": name,
      "positive_choice": positiveAnswer,
      "negative_choice": negativeAnswer,
      "point": parseInt(point),
      "role": role
    }
    console.log(requestBody)
    if (Object.values(requestBody).some(value => value === undefined || value === '')) {setError('Please fill in all fields')}
  
    fetch('http://127.0.0.1:8000/api/admin/question/', {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "question": name,
        "positive_choice": positiveAnswer,
        "negative_choice": negativeAnswer,
        "point": parseInt(point),
        "role": role
      })
    }).then(response => response.json())
      .then(data => {setData(data)})
      .catch(error => setError(error))

      setShowAddModal(false)
  }

  const deleteQuestion = (id)=>{
    fetch(`http://127.0.0.1:8000/api/admin/question/${id}/`, {
      method: 'DELETE',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res =>res.json())
    .then(data=>console.log(data))
    .catch(error => setError(error))
    .finally(() => setShowAddModal(false))
  }



  return (
    <PosAbsolute>
      <Container>
          <Title>Add new Question</Title>
          <Content> 
              <ListQuestions>
                {data ? data.map((i) => (
                    <ListItem key={i.id} onClick={()=>{
                      setCurrentElement((prev) => [...prev, i])
                      setShowUpdateModal(true)
                    }}>{i.question}</ListItem>
                )): <Loading />}
              </ListQuestions>
            <AddNewQuestionBtn onClick={()=>setShowAddModal(true)}>Add Question</AddNewQuestionBtn>
          </Content>
      </Container>
    
      {showAddModal &&
        <Modal>
          <Close onClick={()=>setShowAddModal(false)}>X</Close>
          <Form onSubmit={(e)=>addNewQuestion(e)}>
            <label htmlFor="question">Enter question</label>
            <input id='question' name='question' type="text" placeholder='Enter question' value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor="answer1">Enter positive answer</label>
            <input id='answer1' name='answer1' type="text" placeholder='Enter answer 3' value={positiveAnswer} onChange={e => setPositiveAnswer(e.target.value)} />

            <label htmlFor="answer2">Enter negative answer</label>
            <input id='answer2' name='answer2' type="text" placeholder='Enter answer 2' value={negativeAnswer} onChange={e => setNegativeAnswer(e.target.value)} />

            <label htmlFor="point">Point</label>
            <input type="number" name="point" id="point" value={point} onChange={e => setPoint(e.target.value)} />

            <label htmlFor="role"></label>
            <select name="role" id="role" value={role} onChange={e => setRole(e.target.value)}>
              <option value="Дизайнер">Дизайнер</option>
              <option value="Розробник">Розробник</option>
              <option value="Менеджер">Менеджер</option>
              <option value="Тестувальник">Тестувальник</option>
            </select>
            {error ? error: <></>}

            <ConformBtn type='submit' onClick={()=> window.location.reload(true)}>Confirm</ConformBtn>
          </Form>
        </Modal>
      }

      {showUpdateModal &&
        <Modal>
          <Close onClick={()=>{
            setShowUpdateModal(false) 
            setCurrentElement([])}}>X</Close>
          {currentElement.map((i)=>(
            <Form onSubmit={(e)=>addNewQuestion(e)} key={i.id}>
              {console.log(i.id)}
              <label htmlFor="question">Enter question</label>
              <input id='question' name='question' type="text" placeholder='Enter question' value={i.question} onChange={e => setName(e.target.value)} />

              <label htmlFor="answer1">Enter positive answer</label>
              <input id='answer1' name='answer1' type="text" placeholder='Enter answer 3' value={i.positive_choice} onChange={e => setPositiveAnswer(e.target.value)} />

              <label htmlFor="answer2">Enter negative answer</label>
              <input id='answer2' name='answer2' type="text" placeholder='Enter answer 2' value={i.negative_choice} onChange={e => setNegativeAnswer(e.target.value)} />

              <label htmlFor="point">Point</label>
              <input type="number" name="point" id="point" value={i.point} onChange={e => setPoint(e.target.value)} />

              <label htmlFor="role"></label>
              <select name="role" id="role" value={i.role} onChange={e => setRole(e.target.value)}>
                <option value="Дизайнер">Дизайнер</option>
                <option value="Розробник">Розробник</option>
                <option value="Менеджер">Менеджер</option>
                <option value="Тестувальник">Тестувальник</option>
              </select>
              {error ? error: <></>}
              <DeleteBtn onClick={()=> {
                deleteQuestion(i.id)
                setTimeout(()=>{
                  window.location.reload(true)
                }, 1000)
                setCurrentElement([])
                }} >Delete</DeleteBtn>
              <ConformBtn type='submit' onClick={()=> {
                window.location.reload(true)
                setCurrentElement([])}}>Confirm</ConformBtn>
            </Form>
          ))}

        </Modal>
      } 
    
    </PosAbsolute>
  )
}

export default Question
