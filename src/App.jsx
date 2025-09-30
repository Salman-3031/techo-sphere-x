import React, { useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Innovation from './pages/Innovation'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import AOS from "aos"
import Footer from './components/Footer/Footer'


const App = () => {

  //   useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   })
  //   AOS.refresh()
  // },[])

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/innovation' element={<Innovation />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App