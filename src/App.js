import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import './App.css';
import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Card from './component/Card.js';
import NotFound from './component/NotFound.js';
import BookList from './component/BookList';
import Books from './component/Books.js';
import NewBook from './component/NewBook.js';
import BookLayout from './component/BookLayout';
import AboutCode from './component/AboutCode';
import Modal from './component/Modal.js';




const  App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [close, setclose] = useState(true)
 
  return (
<div className="App">
      <Navbar modalOpen={setOpenModal}/>
      <Routes>
      <Route path='/Books' element={<BookLayout />} >
        {/* The following is the nested form of Route */}
        <Route index element={<BookList />}/>
        <Route path=':id' element={<Books />}/>
        <Route path='new' element={<NewBook />}/>
      </Route>
      <Route path='/' element={<Home />} />

      <Route path='/About' element={<About />} >
        <Route path='AboutCode' element={<AboutCode />} />
      </Route>

      <Route path='/Contact' element={close && <Contact openCard={setclose} appear={setclose} />}/>
      <Route path='/:user' element={ close && <Card closeCard={setclose} />}/>
      {/* These are the normal form of router */}
      {/* <Route path='/Books' element={<BookList />}/>
      <Route path='/Books/:id' element={<Books />}/>
      <Route path='/Books/new' element={<NewBook />}/> */}
      <Route path="*" element={<NotFound />}/>
      </Routes> 
      {openModal && <Modal closeModal={setOpenModal} />}  
      

    </div>
     
  );
}

export default App;
