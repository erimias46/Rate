import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'         
import Home from './Pages/Home'
import Header from './Components/Header'
import Teachers from './Pages/Teachers'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
