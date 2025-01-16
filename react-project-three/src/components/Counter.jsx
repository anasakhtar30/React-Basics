import { useState } from 'react';
import React from 'react'

const counter = () => {
  const [count,setCount] = useState(0); 

  const changeCount = ()=>{
    setCount(count+1);
  }
  
  return (
    <div class="counter-container w-64 border-2 border-blue-500 rounded-lg p-4 mx-auto mt-20 flex flex-col items-center">
    <p id="para" class="font-bold">You have Clicked {count} times</p>
    <button onClick={changeCount} id="btn" class="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-blue-600 mt-4">
        Click me
    </button>
  </div>

  )
}

export default counter
