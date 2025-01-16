import React from 'react'
// import { UserContext } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext)

    const {theme,setTheme} = useContext(ThemeContext);

    const toggleTheme = ()=>{
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }

  return (
    <div>
      <button onClick={toggleTheme}
       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Change theme
      </button>
    </div>
  )
}

export default ChildC
