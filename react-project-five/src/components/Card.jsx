import React from 'react'

const Card = (props) => {
  return (
    <div className="card-container p-4 border rounded shadow-md">
      <input 
      type="text"
       className='border-2 border-blue-900'
       onChange={(e)=>{props.setName(e.target.value)}}
      //  Passes the updated input value (e.target.value) to the setName function.
      //  Updates the name state in the parent component (App).
       />
        
        <p>Name state variable ki value inside {props.title} : {props.name}</p>

    </div>
  )
}

export default Card
