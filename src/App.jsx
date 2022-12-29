import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Detail from './components/Detail'
import About from './components/About'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
