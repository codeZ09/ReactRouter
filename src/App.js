import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';


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
