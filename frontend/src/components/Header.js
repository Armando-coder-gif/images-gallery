
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = ({title}) =>{
    
    // const {title} = props;
    
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"> {title} </Navbar.Brand>
        </Navbar>
    )
}

export default Header;