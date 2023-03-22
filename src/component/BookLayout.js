
import { Link, Outlet } from 'react-router-dom';

export default function BookLayout() {
    return (
    <>
        <h1>Visit the links below</h1>

        <Link to='/Books/1'>Book 1</Link>
        <br/>
        <Link to='/Books/2'>Book 2</Link>
        <br/>
        <Link to='/Books/new'>NewBook</Link>

        <Outlet/>
    </> 
        
    )
       
}