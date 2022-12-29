import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  const [datas, setDatas] = useState([])
  const fetchDatas = async () => {
    const response = await fetch('adresse des datas')
    const data = await response.json()
    setDatas(data)
  }

  fetchDatas()

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Detail />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
