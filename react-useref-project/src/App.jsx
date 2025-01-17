
import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  // const[count,setCount] = useState(0)
  // let val = useRef(0);
  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log("value of val :",val.current);
    
  //   setCount(count+1);
  // }

  // useEffect(()=>{
  //   console.log("Mai har baar render ho gya hu");
    
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'red'
  //   btnRef.current.style.color = 'white'
  // }

  const [timer,setTimer] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTimer(timer => timer+1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTimer(0);
  }

  return (
    <div>

      <h1>StopWatch : {timer} seconds</h1>
      <button onClick={startTimer}>
        Start Timer
      </button>
      <br /> <br />

      <button onClick={stopTimer}>
        Stop Timer
      </button>
      <br /> <br />

      <button onClick={resetTimer}>
        Reset Timer
      </button>

      {/* <button ref={btnRef} 
      onClick={handleIncrement}>
        Increment
      </button>
      <br />

      <button onClick={changeColor}>
        Change color of 1st button
      </button>

        <div>
          Count : {count}
        </div> */}

    </div>
  )
}

export default App
