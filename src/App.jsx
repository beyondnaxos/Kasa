import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
