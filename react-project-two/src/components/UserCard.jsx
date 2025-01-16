import React from 'react'
import doremon from '../assets/doremon.jpg'
import chamelion from '../assets/chamelion.jpeg'

const UserCard = (props) => {
  return (
    <div className='user-container w-1/2 mx-auto' style={props.style}>

      <p id='user-name' className='text-white w-1/4'>
        {props.name}
      </p>

      <img 
      id = 'user-img'
      src={props.image} 
      alt={props.name}  
      className='w-1/4'/>

      <p id='user-desc' className = 'w-1/4 text-white' >
        {props.desc}
      </p>
    </div>
  ) 
}

export default UserCard

