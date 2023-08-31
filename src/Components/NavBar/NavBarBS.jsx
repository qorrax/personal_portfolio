
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBarBS.css'; // Import your custom CSS


const NavBarBS = () => {
  const [expanded, setExpanded] = useState(false); // State for expanded navbar

  // Toggle the expanded state when the navbar toggler is clicked
  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        expanded={expanded} // Pass the expanded state to the Navbar component
        
        >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle} // Call the toggle function
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarBS;

