import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaUniversity, FaLaptopCode } from "react-icons/fa";
import './Certifications.css';

export default function Certifications() {

  const certifications = [
    {
      title: "Programming In Java",
      issuer: "NPTEL (IIT Kharagpur)",
      description: "A rigorous 12-week course covering Core Java fundamentals, Object-Oriented Programming (OOP), Multithreading, Exception Handling, and GUI development using Swing.",
      link: "https://drive.google.com/file/d/1DJ-C7kx2xwGubVktJlMp33eQypiz1aTS/view?usp=drivesdk",
      icon: <FaUniversity />
    },
    {
      title: "Database Management Systems",
      issuer: "NPTEL (IIT Kharagpur)",
      description: "Completed an 8-week advanced curriculum on Relational Database Design. Mastered SQL optimization, Schema Normalization (1NF to BCNF), and Transaction Management (ACID properties).",
      link: "https://drive.google.com/file/d/1-lTF5NSJkN_68d1760vl6KvYcnZ6jHuD/view?usp=drivesdk",
      icon: <FaUniversity /> 
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Apna College",
      description: "Comprehensive training in the MERN Stack. Built scalable web applications by integrating MongoDB, Express.js, and Node.js backends with responsive React frontends.",
      link: "https://drive.google.com/file/d/1PbaC3kfvviTMCAvLsAAVUMFTHCiLBtSw/view",
      icon: <FaLaptopCode />
    }
  ];

  return (
    <section id="certifications" className="cert-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            My <span className="highlight">Certifications</span>
          </h2>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100"
              >
                <div className="cert-card">
                  <div className="icon-wrapper">
                    <span className="cert-icon">{cert.icon}</span>
                  </div>
                  
                  <div className="card-body">
                    <h5 className="cert-title">{cert.title}</h5>
                    <p className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></p>
                    <p className="cert-text">{cert.description}</p>
                  </div>

                  <div className="card-footer">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-cert-btn"
                    >
                      View Certificate <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8rem" }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};