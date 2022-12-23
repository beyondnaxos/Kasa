import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "contacts/:contactId",
  //     element: <Contact />,
  //   },
  // ]);

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
