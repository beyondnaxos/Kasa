import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path=''  ></Route>
     
      </Routes>
    
    </div>
    </Router>
  )
}

export default App
