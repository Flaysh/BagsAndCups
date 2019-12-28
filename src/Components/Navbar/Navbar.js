import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../../assets/coffee-cup.png';
import { Link } from 'react-router-dom';

import './Navbar.css'


const NavbarApp = () => {
    return (
        <div>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Navbar.Brand >
                    <img
                        alt="icon"
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    Bugs & Cups
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="navbar-links">Home</Link>
                        <Link to="/bags" className="navbar-links">Bags</Link>
                        <Link to="/cups" className="navbar-links">Cups</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarApp;