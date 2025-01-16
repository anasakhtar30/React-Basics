import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ResizeComponents = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize =()=> setWindowWidth(window.innerWidth)
        console.log("Event Listener Added")
        window.addEventListener('resize',handleResize)

        return ()=>{
            console.log("Event Listener removed")
            window.removeEventListener('resize',
                handleResize);
        };

    },[]);


  return (
    <div>
      <h1>Window Width:{windowWidth}</h1>
    </div>
  )
}

export default ResizeComponents
