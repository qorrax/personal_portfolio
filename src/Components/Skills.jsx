


import React from 'react';
import html from  "./images/html.png"
import css from './images/css.png';
import javascript from  "./images/javascript.png"
import react from  "./images/react.png"
import tailwind from  "./images/tailwind.png"
import node from './images/node.png';
import github from  "./images/github.png"
import aws from  "./images/aws.png"


 const Skills=()  =>{
  return (
    
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                    <p className='my-4'>css</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                    <p className='my-4'>javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                    <p className='my-4'>react</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                    <p className='my-4'>node</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                    <p className='my-4'>tailwind</p>
                </div>
                
            </div>
        </div>
      </div>
    );
  };

export default Skills;