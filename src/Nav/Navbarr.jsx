import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navbarr() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand className='name_head' style={{ color: "#004225", fontSize: "30px" }}> <span className='sec_span'>KC</span> <span className='main_span'>Karma <span className='kc' style={{ color: "#B2533E" }}>Crafted</span></span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "white", backgroundColor: "white" }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='me-4'><NavLink className="linkk" to="/">Home</NavLink></Nav.Link>
                            <Nav.Link className='me-4' ><NavLink className="linkk" to="/shop">Shop</NavLink></Nav.Link>
                            <Nav.Link className='me-4' ><NavLink className="linkk" to="/about">Contact</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarr
