import React from 'react';


const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='logContainer'>
            <h3>ROUTER</h3>
            </div>
            <div className='linkgroup'>
               <button><a href='/'>Home</a></button> 
               <button><a href='/About'>About</a></button> 
               <button><a href='/Contact'>Contact</a></button> 
            </div>
        </nav>
    )
}

export default Navbar;


