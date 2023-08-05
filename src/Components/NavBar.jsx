
// Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-3xl font-semibold">
            My Portfolio
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              end
              activeClassName="text-white"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName="text-white"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="text-white"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-white"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact
            </NavLink>
          </div>

           



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
