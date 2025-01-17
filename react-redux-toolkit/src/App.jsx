
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement,reset, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const [amount,setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button className='w-10 h-10 border-2 border-cyan-500 rounded-xl' onClick={handleIncrementClick}> + </button>
      <p>Count :{count}</p>
      <button className='w-10 h-10 border-2 border-cyan-500 rounded-xl' onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button className='w-10 h-10 border-2 border-cyan-500 rounded-xl' onClick={handleReset}> Reset </button>
      <br />
      <br />
      <input type="Number"
       value={amount}
       placeholder='Enter Amount'
       className='border-2 border-cyan-700'
       onChange={(e)=>setAmount(e.target.value)}
       />

      <br />
      <br />
      <button className='w-20 h-20 border-2 border-cyan-500 rounded-xl'
       onClick={handleIncAmountClick}> Incr by Amount </button>

    </div>
  )
}

export default App
