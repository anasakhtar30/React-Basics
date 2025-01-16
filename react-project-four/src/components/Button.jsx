import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.incrementCount} className='border-2 border-blue-700 bg-gray-400 text-black rounded-lg'>
        {props.text}
        </button>
    </div>
  )
}

export default Button
