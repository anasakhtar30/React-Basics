import { useState } from 'react'

import ColorSwitch from './components/ColorSwitch'
import './App.css'

function App() {
  const [clicks,setClicks] = useState(0);
  const handleClickOutside = ()=>{
    setClicks(clicks + 1);
  }

  const getRandomColor = ()=>{
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r},${g},${b})`
  }

  const handleChangeColor = ()=>{
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  }

  return (
    <div style={{width :'100%' , height:'100%'}} onClick={handleClickOutside}
    className='bg-neutral-100 text-black'>
      <ColorSwitch onChangeColor = {handleChangeColor}/>
      <br />
      <br />
      <h1>Click count on the Page : {clicks}</h1>
    </div>
  )
}

export default App
