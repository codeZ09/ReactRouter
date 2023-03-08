import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import './App.css';
import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';


const  App = () => {
  return (
<BrowserRouter>
<div className="App">
      <Navbar/>
      <Route path='./' component={Home}/>
      <Route path='./About' component={About}/>
      <Route path='./Contact' component={Contact}/>
    </div>
</BrowserRouter>
     
  );
}

export default App;
