import './App.css'
import { BrowserRouter} from 'react-router-dom'
import Routing from './Routing'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routing/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
