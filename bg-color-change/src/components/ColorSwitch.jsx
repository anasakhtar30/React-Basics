import React from 'react'

const ColorSwitch = (props) => {
  return (
    <button onClick={(e)=>{
        e.stopPropagation();
        {props.onChangeColor()};
    }} className='border-2 border-cyan-950 bg-black text-white'>
        Change Color
    </button>
  )
}

export default ColorSwitch
