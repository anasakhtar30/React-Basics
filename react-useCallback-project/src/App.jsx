
import './App.css'
import { useCallback, useState } from 'react';
import ChildComponents from './components/childComponents';
import ExpensiveComponents from './components/ExpensiveComponents';

function App() {
  // const [count,setCount] = useState(0);

  // const handleClick = useCallback(()=>{
  //   setCount(count+1)
  // },[])



  return (
    <div>
      <ExpensiveComponents/>
      {/* <div>
        Count : {count}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br /> <br />
      <div>
        <ChildComponents 
        handleClick = {handleClick}
        buttonName = 'Click me'/>
      </div> */}
    </div>
  )
}

export default App
