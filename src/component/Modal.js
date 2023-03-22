import React from 'react';
import  ReactDOM  from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Modal = ({closeModal}) =>{
    
  

    

    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='overlay'>
                <div className='content'>
                    <h3>I am a Modal</h3>  
                </div>
                <div className='close'><NavLink onClick={(() => closeModal(false))}>Close</NavLink></div>  
            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}

export default Modal;