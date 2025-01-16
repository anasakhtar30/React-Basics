import './App.css'
import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Report from './components/Report'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element:
      <div>
        <About/>
        <Navbar/>
      </div>

    },

    {
      path:"/dashboard",
      element:
      <div>
        <Dashboard/>
        <Navbar/>
      </div>,

      children:[
        {
          path:'courses',
          element:<Courses/>
        },

        {
          path:'mock-tests',
          element:<MockTest/>
        },

        {
          path:'report-sec',
          element:<Report/>
        },
        
      ]
      
    },

    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },

    {
      path:'*',
      element:<NotFound/>
    }
  ]

)


function App() {

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
