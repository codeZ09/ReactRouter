import React from 'react';
import { useParams } from 'react-router-dom';

const Card = () => {

    const {user}: { user: string } = useParams();
    

    return (
    <div className='general'>
        <div className='homecard'>
            <h3 className='header'>{user}</h3>
            <p>Welcome</p>
        </div>
    </div>
        
    )
}

export default Card;