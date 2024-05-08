
import React, {  useEffect } from 'react';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollComponent from './Components/ScrollComponent';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Help from './Components/Help';
import Cart from './Components/Cart';
import Myorders from './Components/Myorders';
import Profile from './Components/Profile';
function App() {
  useEffect(() => {
    AOS.init({   
    });
  }, []);

  return (
    <>
    <ScrollComponent/>
     <div className="mx-4 md:mx-8 lg:mx-16  bg-white shadow-2xl "  style={{
      boxShadow:
      " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    }}>
    <BrowserRouter>
<Navbar/>
    <Routes>
    <Route path="/log/:id" element={<Footer/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/help" element={<Help/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/myorders" element={<Myorders/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/scrollcomponent" element={<ScrollComponent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
