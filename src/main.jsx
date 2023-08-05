
import App from './App.jsx'
import './index.css'

// main.jsx or App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from   "./Components/Home"
import Skills from  "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from  "./Components/Contact"

const Main = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Main;
