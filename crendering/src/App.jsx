import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)


  return (
    <div>
      <h1>Welcom EveryOne to codehelp web dev course</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
        {!isLoggedIn && <LoginBtn/>}
      </div>
    </div>
  )


  //Ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/> }
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App
