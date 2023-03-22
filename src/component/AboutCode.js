import React from 'react';
import { useOutletContext } from 'react-router-dom';

function AboutCode (){
    const obj = useOutletContext();
    return (
    <>  
            
    <h3>
        {obj.Statement}
    </h3>
    </>
        
    )
    
}

export default AboutCode;



