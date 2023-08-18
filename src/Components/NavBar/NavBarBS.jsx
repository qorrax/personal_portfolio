

import { Navbar, Container, Nav } from 'react-bootstrap';
import React,{useState} from 'react';
import Home from '../Home';  
import Portfolio  from '../Portfolio'; 
import Projects from '../Projects';  
import Contact from '../Contact'; 


const NavBarBS = () => {

 
  


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>  {/* Corrected href value */}

            
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBarBS;
