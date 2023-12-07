import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "../Components/HomePage"
import BookMark from '../Components/BookMark'

const Routerwrapper = () => {

  const approuter = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>
    },
    {

      path: "/bookmark",
      element:<BookMark/>
    }
  ])
  return (
    <div><RouterProvider router={approuter}/></div>
  )
}





export default Routerwrapper