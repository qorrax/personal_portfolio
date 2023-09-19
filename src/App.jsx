
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarBS from './Components/NavBar/NavBarBS';
// import Home from './Components/Home';
// import  Portfolio from './Components/Portfolio';
// import Projects from './Components/Projects';
// import Contact from './Components/Contact';

// const App = () => {
//   return (
//     <div>
//       <NavBarBS />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Porfolio" element={<Portfolio />} />
//         <Route path="/Projects" element={<Projects />} />
//         <Route path="/Contact" element={<Contact />} />

//         {/* Add a catch-all route */}
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './Components/NavBar/NavBarBS';
import Footer from './Components/Footer'; // Import the Footer component
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <NavBarBS />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Add a catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default App;
