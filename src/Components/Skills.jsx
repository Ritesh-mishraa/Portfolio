import React from 'react';
import { Container, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // <--- FIXED IMPORT

import './Skills.css'; 

export default function Skills() {
  
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="icon-java" /> },
        { name: "JavaScript", icon: <SiJavascript className="icon-js" /> },
        { name: "SQL", icon: <FaDatabase className="icon-sql" /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="icon-react" /> },
        { name: "HTML5", icon: <FaHtml5 className="icon-html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="icon-css" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="icon-bs" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="icon-node" /> },
        { name: "Express", icon: <SiExpress className="icon-express" /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="icon-mongo" /> },
        { name: "MySQL", icon: <SiMysql className="icon-mysql" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="icon-git" /> },
        { name: "GitHub", icon: <FaGithub className="icon-github" /> },
        { name: "VS Code", icon: <VscVscode className="icon-vscode" /> }, // <--- UPDATED ICON
        { name: "Postman", icon: <SiPostman className="icon-postman" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            My <span className="highlight">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div variants={cardVariants} className="skill-card h-100">
                <div className="card-body">
                  <h5 className="category-title">{category.title}</h5>
                  <div className="skills-grid">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="skill-pill">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};