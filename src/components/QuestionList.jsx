import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from './Loading'



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

const QuestionList = ({ data }) => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {setQuestions(data)}, [data])

    return (
        <ListQuestions>
            {questions ? questions.map((question) => (
                <ListItem key={question.id}>{question.question}</ListItem>
            )): <Loading />}
        </ListQuestions>
    )
}

export default QuestionList
