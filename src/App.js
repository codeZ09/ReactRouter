import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import './App.css';
import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Card from './component/Card.js';
import NotFound from './component/NotFound.js';



const  App = () => {
  return (
<div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/:user' element={<Card />}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>    
    </div>
     
  );
}

export default App;
