import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponents from './components/TimerComponents'
import DataFetcher from './components/DataFetcher'
import ResizeComponents from './components/ResizeComponents'
import MultiEffectComponents from './components/MultiEffectComponents'
function App() {
  
  //First-> side-effect function
  //second -> clean-up function
  // third -> comma seperated depend. list

  // useEffect(()=>{
  //   first

  //   return ()=>{
  //     second
  //   }

  // },[third])


  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(1);

  // const handleClick = ()=>{
  //   setCount(count+1);
  // }

  //Variation:1 of useEffect. runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render");
  // })


  //Variation : 2
  // that runs on only first render
  // useEffect(()=>{
  //   alert("I will run only first render")
  // },[])


  //Variation : 3
  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // },[count])


  // Variation: 4
  // useEffect(()=>{
  //   alert("I will run either count/total changes")
  // },[count,total])

  // const handleClickToTotal = ()=>{
  //   setTotal(total + 1);
  // }

  // //Variation : 5
  // // Let's add Clean-up function
  // useEffect(()=>{
  //   alert("Count is updated")

  //   return () =>{
  //     alert("Count is unmounted from UI")
  //   }

  // },[count])


  return (
    <div>


      {/* <button onClick={handleClick}>
        update Count
      </button>
      <br />
      Count is : {count}

      <br />

      <button onClick={handleClickToTotal}>
        update total
      </button>
      <br />
      Total is : {total} */}

        {/* <Timer/> */}

      {/* <LoggerComponent/> */}
      {/* <TimerComponents/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponents/> */}
      {/* <ResizeHeight/> */}
      {/* <MultiEffectComponents/> */}
    </div>
  )
}

export default App

