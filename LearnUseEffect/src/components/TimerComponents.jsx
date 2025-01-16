import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TimerComponents = () => {
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("Timer executed")
            setSeconds((prevSeconds => prevSeconds + 1));
        },1000);

        return ()=>{
            console.log("Time to stop")
            clearInterval(intervalId)
        }

    },[])

  return (
    <div>
      <h1>Seconds :{seconds}</h1>
    </div>
  )
}

export default TimerComponents
