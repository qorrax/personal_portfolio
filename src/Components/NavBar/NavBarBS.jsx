


import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarBS = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        expanded={expanded}
        className="sticky-top" // Make the Navbar sticky
      >
        <Container>
          <Navbar.Brand href="#home">Abdull Dev</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-20"> {/* Use "ml-auto" to move the Nav elements to the right */}
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/skills">
                Skills
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
