import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/layoutOne'
import Home from './pages/Home'

const App = () => {


  const myRote = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne />} >
      <Route index element={<Home />} ></Route>
    </Route>
  ))




  return (
    <>
    
    <RouterProvider router={myRote} />
    
    
    </>
  )
}

export default App