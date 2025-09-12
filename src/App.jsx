import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from '../src/pages/Home'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<Layout />} >
      
      <Route index element={<Home />} ></Route>
      </Route>
    </Route>
  ))




  return (
    <>
    
    <RouterProvider router={myRoute} />
    
    </>
  )
}

export default App