import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>
          <h1>404 Not Found :(</h1>
        </div>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App