



// import React from 'react';
// import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import tech from "./images/tech.png";

// const projectsData = [
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     demoLink: 'https://example.com/demo1',
//     liveLink: 'https://example.com/live1',
//   },
  
//     {
//       title: 'Project 1',
//       description: 'Description for Project 1',
//       imageUrl: tech, // Imported image
//       demoLink: 'https://example.com/demo1',
//       liveLink: 'https://example.com/live1',
//     },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     demoLink: 'https://example.com/demo1',
//     liveLink: 'https://example.com/live1',
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     demoLink: 'https://example.com/demo1',
//     liveLink: 'https://example.com/live1',
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     demoLink: 'https://example.com/demo1',
//     liveLink: 'https://example.com/live1',
//   },

//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     demoLink: 'https://example.com/demo1',
//     liveLink: 'https://example.com/live1',
//   },
//   // Add data for the other projects here...
// ];

// const Projects = () => {
//   return (
//     <Container class="pb-3">
//       <h2 className="text-2xl font-bold my-4">My Projects</h2>
//       <Row>
//         {projectsData.map((project, index) => (
//           <Col key={index} md={4}>
//             <Card>
//               <CardImg top width="100%" src={project.imageUrl} alt={project.title} />
//               <CardBody>
//                 <CardTitle tag="h5">{project.title}</CardTitle>
//                 <CardText>{project.description}</CardText>
//                 <Button href={project.demoLink} target="_blank" color="primary" className="mr-2">
//                   Demo
//                 </Button>
//                 <Button href={project.liveLink} target="_blank" color="success">
//                   Live
//                 </Button>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Projects;



// import React from 'react';
// import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import tech from "./images/tech.png";

// const projectsData = [
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: tech, // Imported image
//     githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
//     liveLink: 'https://tech-job.netlify.app/', // Live website link
//   },
//   // Add data for the other projects here...
// ];

// const Projects = () => {
//   return (
    
//     <Container class="max-w-[100px] mx-auto  bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full'">
//       <h2 className="text-2xl font-bold my-4">My Projects</h2>
//       <Row>
//         {projectsData.map((project, index) => (
//           <Col key={index} md={4}>
//             <Card>
//               <CardImg top width="100%" src={project.imageUrl} alt={project.title} />
//               <CardBody>
//                 <CardTitle tag="h5">{project.title}</CardTitle>
//                 <CardText>{project.description}</CardText>
//                 <Button href={project.githubLink} target="_blank" color="primary" className="mr-2">
//                   GitHub
//                 </Button>
//                 <Button href={project.liveLink} target="_blank" color="success">
//                   Live Website
//                 </Button>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}

//       </Row>
//     </Container>
    
//   );

// }

// export default Projects;

import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import tech from "./images/tech.png";

const projectsData = [

  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },

  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },

  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: tech, // Imported image
    githubLink: 'https://github.com/qorrax/job-finder/tree/job-web', // GitHub link
    liveLink: 'https://tech-job.netlify.app/', // Live website link
  },



  // Add data for the other projects here...
];

const Projects = () => {
  return (
    <Container className="max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <h2 className="text-2xl font-bold my-4 text-white">My Projects</h2>
      <Row>
        {projectsData.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="custom-card">
              <CardImg top width="100%" src={project.imageUrl} alt={project.title} />
              <CardBody>
                <CardTitle tag="h5">{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
                <Button href={project.githubLink} target="_blank" color="primary" className="mr-2">
                  GitHub
                </Button>
                <Button href={project.liveLink} target="_blank" color="success">
                  Live Website
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
