import { useState } from 'react'
import './App.css'

import {Route, Routes} from 'react-router-dom'
import { Homepage } from '../pages/Homepage/Homepage'
import {LoginPage} from "../pages/LoginPage/LoginPage"

function App() {

  return (
    <div className="App">
      <h1>TODAPP</h1>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />

      </Routes>

    </div>
  )
}

export default App
