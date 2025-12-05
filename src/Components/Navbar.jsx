import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import './Navbar.css';

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={scrolled ? "scrolled" : ""} 
      fixed="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          
          <span className="brand-bracket">&lt;</span> 
          Ritesh 
          <span className="brand-bracket">/&gt;</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item-link">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-item-link">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-item-link">Projects</Nav.Link>
            <Nav.Link href="#certifications" className="nav-item-link">Certifications</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-link">Contact</Nav.Link>
          </Nav>
          
          
          <span className="navbar-text">
            <a href="https://www.linkedin.com/in/ritesh-kumar-mishra-a7b8b3249/" target="_blank" rel="noreferrer">
              <button className="vvd"><span>Connect</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}