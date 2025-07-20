import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { authStore } from './pages/Store'
import Auth from './pages/Auth'

const App = () => {
  const isAuthenticated = authStore((state)=>state.isAuthenticated)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={isAuthenticated?<Home/>:<Auth/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App