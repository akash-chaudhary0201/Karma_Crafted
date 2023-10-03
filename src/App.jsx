import './App.css'
import Home from './Home_Component/Home'
import Navbarr from './Nav/Navbarr'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from './Shop_Components/Shop'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
