
    
  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import NavBar from './Components/NavBar';
  // import './App.scss';
  
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
  