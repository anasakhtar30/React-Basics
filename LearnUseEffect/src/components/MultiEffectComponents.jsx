import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const MultiEffectComponents = () => {
    const [count,setCount] = useState(0);
    const [seconds,setSeconds] = useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("Count Changed :", count);
    },[count])

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("Started")
            setSeconds(prevSecond => prevSecond + 1);
        },1000)
        
        return ()=>{
            console.log("Cleaned-up")
            clearInterval(intervalId);
        }

    },[])


  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={incrementCount}>
        Increment Count
      </button>
      <h1>Second : {seconds}</h1>
    </div>
  )
}

export default MultiEffectComponents
