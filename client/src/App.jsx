import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'         
import Home from './Pages/Home'
import Header from './Components/Header'
import Teachers from './Pages/Teachers'
import Details from './Pages/Details'
import Create from './Pages/Create'
import Auth from './Pages/Auth'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/create' element={<Create />} />
        <Route path='/teachers/:id' element={<Details />} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
