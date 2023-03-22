import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
    <div>     
        <div className='homecard'>
            <Link to='/React-Router' className='header'>React-Router</Link>
         
        </div>
            <div className='homecard'>
                <Link to='/React-Life Cycle Methods' className='header'>React-Life Cycle Methods</Link>
            </div>
    </div>
       
    )
}

export default Contact;