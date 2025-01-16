
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  
  const [count,setCount] = useState(0);

  const handlerClick = ()=>{
    setCount(count+1);
  }

  return (
    <div>

      <Button incrementCount = {handlerClick} 
      text = "Press me">
        <h1>{count}</h1>
        </Button>


      {/* <Card name = "Anas Mallick">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children = "Main ek child hu">
        Hello Jee, kaise ho saare
      </Card> */}

    </div>
  )
}

export default App
