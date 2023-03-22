import React from 'react';
import { NavLink } from 'react-router-dom'; //useNavigate 



const Navbar = ({modalOpen, appear}) => {
    
    // The code below is for Programmmatic Redirect
    
    // const navigate = useNavigate();

    // const redirect = () => {
    //     setTimeout(() => {
    //         navigate('/About')
    //     }, 2000);  
    // }

   const Open = () => {
        appear(true)     
   } 

    return(
        <nav className='navbar'>
            <div className='logContainer'>
            <h3>ROUTER</h3>
            </div>
            <div className='linkgroup'>
               <button  ><NavLink className='mobile' to='/'>Home</NavLink></button> 
               {/* onClick = {redirect} */}
               <button  ><NavLink className='mobile' to='/About'>About</NavLink></button> 
               <button >
                <NavLink 
                className='mobile' 
                to='/Contact' 
                onClick={Open}
                >
                Contact
                </NavLink>
                </button> 
               <button><NavLink className='mobile' to='/Books'>Books</NavLink></button>
            </div>
        </nav>
    )
}

export default Navbar;


