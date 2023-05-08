import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DashboardMenu from '../components/DashboardMenu'
import Loading from '../components/Loading';


const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Dashboard = () => {
  const [role, setRole] = useState(null)
  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const token = JSON.parse(localStorage.getItem('access_token'))

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/admin/role/', {headers: {Authorization: `Bearer ${token}`}})
      const responseData = await response.json()
      console.log(token, 'rl');
      setRole(responseData)
    }
    const fetchQuestion = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/admin/question/', {headers: {Authorization: `Bearer ${token}`}})
      const responseData = await response.json()
      console.log(token, 'qs');
      setQuestion(responseData)
    }
    
    setTimeout(()=>{
      fetchData()  
      fetchQuestion()
      setLoading(true)
    }, 2000)
  }, [token])


  return (
    <Container>
      {loading ? <DashboardMenu token={token} role={role} question={question} />:<Loading />}
    </Container>
  )
}

export default Dashboard
