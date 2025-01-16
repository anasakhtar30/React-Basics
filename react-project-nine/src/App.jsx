import './App.css'
import ChildA from './Components/ChildA';
import { createContext,useState } from 'react';

//Step1: create Context
// const UserContext = createContext();

//Step2 : wrap all the child inside a provider

//Step3: pass value

//Step4 : consumer ke andar jaake consume krlo

const ThemeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"Love"})

  const [theme,setTheme] = useState('light');
  return (

    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div
          id="container" style={{backgroundColor: theme==='light'? "beige":"black"}}>
      <ChildA />
    </div>

      </ThemeContext.Provider>
    </div>

    // <>
    //   <UserContext.Provider value = {user}>
    //     <ChildA/>
    //   </UserContext.Provider>

    // </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
