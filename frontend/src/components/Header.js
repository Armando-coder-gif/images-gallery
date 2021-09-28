
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg';

const navbarStyle = {
    backgroundColor: '#eeeeee',
};


const Header = ({title}) =>{
    
    // const {title} = props;
    
    return(
        <Navbar alt={title} style={navbarStyle} variant="light">
            <Container>
                <Logo alt={title} style={{ maxWith: '10rem', maxHeight: '4rem' }} />
            </Container>
        </Navbar>
    )
}

export default Header;