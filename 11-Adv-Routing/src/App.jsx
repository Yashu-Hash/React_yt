
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Errorpage from './pages/Errorpage'
import Nav2 from './Components/Nav2'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
    <Nav2 />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />}> 

         <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        </Route> 
        
       
        <Route path="*" element={<Errorpage/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
