

import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const About = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 py-4 flex flex-col justify-center h-full'>
          <p className='text-pink-600 text-3xl'>Hi, my name is</p>
          <h1 className='text-4xl pt-2 sm:text-6xl font-bold text-[#ccd6f6]'>
            Abdulkadir Mohamed
          </h1>

          <p className='text-[#8892b0] py-2 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button
              onClick={toggleProjects}
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>

    
      <div className='bg-[#0a192f]'>
          {showProjects && <Projects />}
             <div className='p-4 md:p-8 lg:p-8'>
            <Skills/>
            <div className='lg:my-4' ></div> {/* Add margin for separation */}
            <Contact />
          </div>
           </div>

    </div>
  );
};

export default About;


