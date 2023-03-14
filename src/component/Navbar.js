import React from 'react';
import { Link } from 'react-router-dom'; //useNavigate 



const Navbar = () => {
    // The code below is for Programmmatic Redirect
    
    // const navigate = useNavigate();

    // const redirect = () => {
    //     setTimeout(() => {
    //         navigate('/About')
    //     }, 2000);  
    // }

    return(
        <nav className='navbar'>
            <div className='logContainer'>
            <h3>ROUTER</h3>
            </div>
            <div className='linkgroup'>
               <button  ><Link className='mobile' to='/'>Home</Link></button> 
               {/* onClick = {redirect} */}
               <button  ><Link className='mobile' to='/About'>About</Link></button> 
               <button ><Link className='mobile' to='/Contact'>Contact</Link></button> 
            </div>
        </nav>
    )
}

export default Navbar;


