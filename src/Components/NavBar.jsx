

import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#c1c4ca] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <a href  onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href onClick={handleClick} to='Skills' smooth={true} duration={500}>
            Skills
          </a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href onClick={handleClick} to='Projects' smooth={true} duration={500}>
            Projects
          </a>
        </li>
        
        <li className='py-6 text-4xl'>
          {' '}
          <a href onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </a>
        </li>
      </ul>

         
      
      
    </>
  );
}

export default NavBar;

