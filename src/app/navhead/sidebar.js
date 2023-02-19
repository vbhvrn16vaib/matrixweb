'use client';

import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './nav.css'

export default function NavHead() {

    const [resize, setResize] = useState(false);

    useEffect( () => {
        window.addEventListener('scroll', scrollfunc);
        return () => window.removeEventListener('scroll', scrollfunc)
    })
    

    const scrollfunc = () =>  {
       const currentScrollPos = window.scrollY;
       if(currentScrollPos > 500){
        setResize(true);
       }else{
        setResize(false);
       }
    }

    return (

        <Navbar  expand="lg" sticky="top" className={`mysticky ` + (resize ? "resize" : "")} onScroll={ scrollfunc }>
            <Container fluid >
                <Navbar.Brand href="/">Matrix Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-1">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="#contact_us">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}