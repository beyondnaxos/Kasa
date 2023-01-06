import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error'


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}
