
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './NavBarBS.css'; // Import your custom CSS


// const NavBarBS = () => {
//   const [expanded, setExpanded] = useState(false); // State for expanded navbar

//   // Toggle the expanded state when the navbar toggler is clicked
//   const handleNavToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <>
//       <Navbar
//         bg="dark"
//         data-bs-theme="dark"
//         expand="lg"
//         expanded={expanded} // Pass the expanded state to the Navbar component
        
//         >
//         <Container>
//           <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             onClick={handleNavToggle} // Call the toggle function
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/home">
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/portfolio">
//                 Portfolio
//               </Nav.Link>
//               <Nav.Link as={Link} to="/projects">
//                 Skills
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact">
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavBarBS;


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
            <Nav className="ml-auto"> {/* Use "ml-auto" to move the Nav elements to the right */}
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
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
