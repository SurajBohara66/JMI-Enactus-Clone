
import './App.css'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery'
import Footer from './Components/Footer/Footer'

function App() {

 
  return (
    
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element = {<Home />}></Route>
  <Route path='/about' element = {<About />}></Route>
  <Route path='/contact' element = {<Contact />}></Route>
  <Route path='/gallery' element = {<Gallery />}></Route>

  </Routes>
  <Footer />
  </BrowserRouter>
  </>

  )
}

export default App
