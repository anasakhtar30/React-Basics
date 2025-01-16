import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();


const handleForDashboard = ()=>{
  navigate('/Dashboard')
}

  return (
    <div>
      About Page

      <button onClick={handleForDashboard}>
        Move to dashboard
      </button>
    </div>
  )
}

export default About
