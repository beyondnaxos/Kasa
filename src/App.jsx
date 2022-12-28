import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

//  create a state for datas
//  create a function to fetch datas
const [datas, setDatas] = useState([])
const fetchDatas = async () => {
  const response = await fetch('adresse des datas')
  const data = await response.json()
  setDatas(data)
}

fetchDatas()

  
  return (
    <Router>
    <div className="App">
      <Routes >
        <Route  path= "/" element= "</MainComponent>"></Route>
    
      </Routes>
    
    </div>
    </Router>
  )
}

export default App
