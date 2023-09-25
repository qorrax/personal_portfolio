

// import React from 'react';
// import  tech  from "./images/tech.png";



// import  data  from "../Data/data.jsx";


// const Projects = () => {

//      // projects file
//      const project = data;
//      //setProject(data);
   

//   return (
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Work
//           </p>
//           <p className='py-6'> Check out some of some of My Projects </p>
//         </div>

// {/* container for projects */}
// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
//           {/* Gird Item */}
//           {project.map((item, index) => (
//   <div
//     key={index}
//     style={{ backgroundImage: `url(${item.image})` }}
//     className="shadow-lg shadow-[#040c16] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//   >
//     {/* Hover effect for images */}
//     <div className="opacity-0 group-hover:opacity-100 ">
//       <span className="text-2xl font bold text-white tracking-wider ">
//         {item.name}
//       </span>
//       <div className="pt-8 text-center ">
//         {/* eslint-disable-next-line */}
//         <a href={item.github} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Code
//           </button>
//         </a>
//         {/* eslint-disable-next-line */}
//         <a href={item.live} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Live
//           </button>
//         </a>
//       </div>
      
//     </div>
//   </div>

   
// ))}




// </div>
//       </div>
//     </div>
//   );
// };


// export default Projects;


// Projects.jsx
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import tech from "./images/tech.png";

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl:'images/tech.png',
    demoLink: 'https://example.com/demo1',
    liveLink: 'https://example.com/live1',
  },

  // Add data for the other projects here...
];

const Projects = () => {
  return (
    <Container class="pb-3">
      <h2 className="text-2xl font-bold my-4">My Projects</h2>
      <Row>
        {projectsData.map((project, index) => (
          <Col key={index} md={4}>
            <Card>
              <CardImg top width="100%" src={tech.png} alt={project.title} />
              <CardBody>
                <CardTitle tag="h5">{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
                <Button href={project.demoLink} target="_blank" color="primary" className="mr-2">
                  Demo
                </Button>
                <Button href={project.liveLink} target="_blank" color="success">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
