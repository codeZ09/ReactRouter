import React from 'react';
import {useParams} from 'react-router-dom';

function Books() {
  
    const {id} = useParams();

    return <h3>Books {id}</h3>
}


export default Books;