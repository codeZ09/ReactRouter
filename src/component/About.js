import React from 'react';
import {Link, Outlet} from 'react-router-dom';


const About = () =>{
return(
<>
<div className="text">
        <div className='general'>
           <div className='homecard'>
            <h3 className='header'>About</h3>
            <p>Coding is all about debugging</p>
            <Link to='AboutCode'>Click On This Link For More</Link>
           </div>
    </div>
    <Outlet context={{Statement:"Coding is 10% writing of code and 90% debugging of code"}} />
    </div>  
</>
   
    )
}

export default About;