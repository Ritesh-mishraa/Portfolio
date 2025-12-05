import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './Projects.css';

const Projects = () => {
  
  // Project Data Array
  const projects = [
    {
      title: "WanderLust",
      description: "A comprehensive full-stack marketplace for property rentals. Built using the MVC architecture with Node.js and Express. Features include secure user authentication (Passport.js), RESTful API integration for map services, and a robust review system using MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "Passport.js", "MVC"],
      img: "wanderlust.png",
      github: "https://github.com/Ritesh-mishraa/WanderLust.git",
      live: "https://wanderlust-dz5h.onrender.com/listings"
    },
    {
      title: "QuickMeet",
      description: "A real-time video conferencing application designed for low-latency communication. Engineered using WebRTC for peer-to-peer media streaming and Socket.io for instant signaling. Features include secure room creation, video toggles, and synchronized chat functionality.",
      tech: ["React", "WebRTC", "Socket.io", "Node.js", "Material UI"],
      img: "quickmeet.png",
      github: "https://github.com/Ritesh-mishraa/QuickMeet",
      live: "https://quickmeetfrontend-2bay.onrender.com/"
    },
    {
      title: "Explore Indian Islands",
      description: "An immersive travel guide platform showcasing the beauty of Indian islands. Focused on responsive UI design and optimized asset loading to ensure a seamless user experience across devices. Currently integrating SQL for structured data management.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      img: "exploreIndianIsland.png",
      github: "https://github.com/rudreshtiwari10/exploreindianislands.git",
      live: null 
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            My <span className="highlight">Projects</span>
          </h2>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={2500}>
                  <div className="project-card">
                    
                    {/* Image Section */}
                    <div className="card-img-wrapper">
                      <img src={project.img} alt={project.title} className="project-img" />
                      <div className="img-overlay"></div>
                    </div>

                    {/* Content Section */}
                    <div className="card-content">
                      <h5 className="project-title">{project.title}</h5>
                      <p className="project-desc">{project.description}</p>
                      
                      {/* Tech Stack Tags */}
                      <div className="tech-tags">
                        {project.tech.map((t, i) => (
                          <span key={i} className="tech-badge">{t}</span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                          <FaGithub /> GitHub
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;