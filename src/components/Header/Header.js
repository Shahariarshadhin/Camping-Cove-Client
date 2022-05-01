import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className='nav-logo'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <Link to="/Login" >Login</Link>
                    <Link to="/register" >Register</Link>
                </div>
            </nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='mx-auto navbar'>

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/inventory">
                                <Nav.Link>Inventory</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/blogs">
                                <Nav.Link>Blogs</Nav.Link>
                            </LinkContainer>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;