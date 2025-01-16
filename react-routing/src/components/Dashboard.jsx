import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleToCourses = ()=>{
    navigate('/Courses')

  }
  

  return (
    <div>
      Dashboard Page
      <button onClick={handleToCourses}>
        Move to courses
      </button>
      <Outlet/>
    </div>
  )
}

export default Dashboard
