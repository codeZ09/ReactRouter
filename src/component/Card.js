import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const Card = () => {

    const {user}  = useParams();

    

    return (
    <div className='general'>
        <div className='homecard'>
            <h3 className='header'>{user}</h3>
            <p>Welcome</p>
            <div className='close'><NavLink>Close</NavLink></div>  
        </div>
    </div>
        
    )
}

export default Card;