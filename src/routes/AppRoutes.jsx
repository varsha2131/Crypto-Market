import React from 'react'
import NavBar from '../components/common/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contactus from '../pages/ContactUs'
import LiveMarkets from '../pages/LiveMarkerts'
import Blog from '../pages/Blog'


const AppRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/markets' element={<LiveMarkets/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes