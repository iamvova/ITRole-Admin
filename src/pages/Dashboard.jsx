import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import DashboardMenu from '../components/DashboardMenu'
import Loading from '../components/Loading';


const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Dashboard = () => {
  const [responseApi, setResponseApi] = useState(null)
  const [loading, setLoading] = useState(false)

  const location = useLocation()
  const accessToken = location.state ? location.state.accessToken : null

  
  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(localStorage.getItem('access_token'))
      const response = await fetch('http://127.0.0.1:8000/api/admin/', {headers: {Authorization: `Bearer ${token}`}})
      const responseData = await response.json()
      setResponseApi(responseData)
    }
    
    setTimeout(()=>{
      fetchData()  
      setLoading(true)
    }, 2000)
  }, [accessToken])


  return (
    <Container>
      {loading ? <DashboardMenu responseApi={responseApi} />:<Loading />}
    </Container>
  )
}

export default Dashboard
