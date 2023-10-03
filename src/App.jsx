import './App.css'
import Home from './Home_Component/Home'
import Navbarr from './Nav/Navbarr'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
