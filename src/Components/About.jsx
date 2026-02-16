import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-5 mb-md-0 d-flex justify-content-center">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="img-wrapper"
              >
                <img src="riteshimage.jpg" alt="Ritesh Kumar Mishra" className="profile-img" />
              </motion.div>
            </Tilt>
          </Col>

          {/* Right Side: Text & Skills */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="section-title">
                About <span className="highlight">Me</span>
              </h2>

              <p className="about-text">
                Hello! I'm <strong>Ritesh Kumar Mishra</strong>, a passionate software developer dedicated to building scalable web applications.
                With a strong foundation in <span className="highlight">MERN Stack</span> and <span className="highlight">Java DSA</span>,
                I bridge the gap between complex backend logic and intuitive frontend design.
              </p>

              <p className="about-text">
                When I'm not debugging code, you’ll find me exploring open-source projects, solving algorithmic challenges, or optimizing performance for web apps.
              </p>

              {/* Tech Stack Icons */}
              <div className="tech-stack">
                <p className="tech-label">Technologies I work with:</p>
                <div className="icons-container">
                  <FaJava title="Java" className="tech-icon" />
                  <SiJavascript title="JavaScript" className="tech-icon" />
                  <FaReact title="React" className="tech-icon" />
                  <FaNodeJs title="Node.js" className="tech-icon" />
                  <SiExpress title="Express.js" className="tech-icon" />
                  <SiMongodb title="MongoDB" className="tech-icon" />
                  <FaDatabase title="SQL" className="tech-icon" />
                  <FaBootstrap title="Bootstrap" className="tech-icon" />
                </div>
              </div>

              {/* Resume Button */}
              <div className="btn-container">
                <a
                  href={`${import.meta.env.BASE_URL}Riteshresume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                  aria-label="Download Resume"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;