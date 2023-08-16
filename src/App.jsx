
    
  import React from 'react';
  import {  Router, Route, Routes } from 'react-router-dom';
  import NavBar from './Components/NavBar';
  
  // Components for different routes
  const Home = () => <div>Home Page</div>;
  const Skills = () => <div>Skills Page</div>;
  const Projects = () => <div>Projects Page</div>;
  const Contact = () => <div>Contact Page</div>;
  
  const App = () => {
    return (
      
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
  
          {/* Add a catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>

      </div>
      
    );
  };
  
  export default App;
  