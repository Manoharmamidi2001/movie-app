import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import './Assets/App.css'
import Signup from './Pages/Signup'
import Dashboard from './Modules/Dashboard'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
