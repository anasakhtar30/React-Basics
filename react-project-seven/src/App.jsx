import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleClick = ()=>{
    alert("I am clicked")
  }

  const mousehover = ()=>{
    alert("mouse ko para ke upar laaye ho")
  }

  const handleInputChange = (e)=>{
    console.log("Input me value change hui hai ye" , e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // I am writing my custom behaviour down
    alert("Form submit krdu kya ?")
  }

  return (
    <div>
        {/* Immediate invokation  interview question*/}
        <button onClick={()=>alert("Button clicked hua h")}>
          Click me
        </button>
      </div>



    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input className='border-2 border-cyan-800' type="text" onChange={handleInputChange}/>
    //     <button type = 'submit'>Submit</button>
    //   </form>
    // </div>




  // <div onClick={handleClick} className="flex items-center justify-center h-screen bg-gray-100">
  //     {/* <p onMouseOver={mousehover} style={{border:"2px solid black"}}>I am a Para </p>
      
  //     <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 shadow-lg">
  //       Click me
  //     </button> */}
  // </div>

  )
}

export default App
