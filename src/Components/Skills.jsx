import React, { useState } from 'react';
import { Container, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaTimes } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import './Skills.css';

export default function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="icon-java" />,
          level: "Intermediate",
          experience: "1+ years",
          description: "Used Java for Object-Oriented Programming, Data Structures, and Algorithms. Built console-based applications and solved 100+ problems on LeetCode.",
          usedIn: ["DSA Practice", "Academic Projects", "LeetCode"]
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="icon-js" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Primary language for both frontend and backend development. Used for DOM manipulation, async programming (Promises, async/await), and building full-stack web applications.",
          usedIn: ["React Apps", "Node.js APIs", "Portfolio"]
        },
        {
          name: "SQL",
          icon: <FaDatabase className="icon-sql" />,
          level: "Intermediate",
          experience: "1+ years",
          description: "Proficient in writing complex queries, JOIN operations, aggregations, and database design. Used MySQL for relational data storage in multiple projects.",
          usedIn: ["MySQL Projects", "Database Design", "Queries"]
        }
      ]
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <FaReact className="icon-react" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Built multiple web applications using React including this portfolio. Experienced with hooks, context API, routing, component design, and Framer Motion animations.",
          usedIn: ["This Portfolio", "AI Interview App", "Resume Analyzer"]
        },
        {
          name: "HTML5",
          icon: <FaHtml5 className="icon-html" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Strong understanding of semantic HTML5. Used for building accessible and SEO-friendly web page structures with proper heading hierarchy and meta tags.",
          usedIn: ["All Web Projects", "Portfolio", "Landing Pages"]
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="icon-css" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Proficient in Flexbox, Grid, animations, transitions, and responsive design. Created glassmorphism effects, gradient backgrounds, and micro-animations.",
          usedIn: ["Portfolio Styling", "Component UI", "Animations"]
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="icon-bs" />,
          level: "Intermediate",
          experience: "1.5+ years",
          description: "Used Bootstrap's grid system and UI components to build responsive layouts quickly. Integrated React-Bootstrap in multiple projects.",
          usedIn: ["Responsive Layouts", "React-Bootstrap", "UI Components"]
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="icon-node" />,
          level: "Intermediate",
          experience: "1.5+ years",
          description: "Built RESTful APIs and backend services using Node.js. Experienced with event-driven architecture, file system operations, and middleware integration.",
          usedIn: ["REST APIs", "AI Interview App", "Authentication"]
        },
        {
          name: "Express",
          icon: <SiExpress className="icon-express" />,
          level: "Intermediate",
          experience: "1.5+ years",
          description: "Used Express.js to build scalable REST APIs with JWT authentication, middleware chains, error handling, and route management.",
          usedIn: ["Backend APIs", "Auth Routes", "Middleware"]
        }
      ]
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="icon-mongo" />,
          level: "Intermediate",
          experience: "1+ years",
          description: "Used MongoDB as NoSQL database for storing user data and application state. Experienced with Mongoose ODM, schema design, and aggregation pipelines.",
          usedIn: ["User Data Storage", "AI Interview App", "Mongoose ODM"]
        },
        {
          name: "MySQL",
          icon: <SiMysql className="icon-mysql" />,
          level: "Intermediate",
          experience: "1+ years",
          description: "Used MySQL for relational data management. Designed normalized schemas, wrote complex JOIN queries, and managed transactional data.",
          usedIn: ["Relational Projects", "Academic DB", "SQL Practice"]
        }
      ]
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="icon-git" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Daily use of Git for version control. Comfortable with branching strategies, merging, rebasing, resolving conflicts, and maintaining clean commit history.",
          usedIn: ["All Projects", "GitHub Repos", "Team Collaboration"]
        },
        {
          name: "GitHub",
          icon: <FaGithub className="icon-github" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Used GitHub for hosting repositories, collaborating on projects, and deploying via GitHub Pages. Familiar with pull requests and repository management.",
          usedIn: ["Portfolio Hosting", "Open Source", "Project Repos"]
        },
        {
          name: "VS Code",
          icon: <VscVscode className="icon-vscode" />,
          level: "Advanced",
          experience: "2+ years",
          description: "Primary code editor for all development. Proficient with extensions, debugging tools, integrated terminal, and customizing the development environment.",
          usedIn: ["All Development", "Debugging", "Extensions"]
        },
        {
          name: "Postman",
          icon: <SiPostman className="icon-postman" />,
          level: "Intermediate",
          experience: "1+ years",
          description: "Used Postman for testing and debugging REST APIs. Created collections, managed environments, and wrote automated API tests.",
          usedIn: ["API Testing", "REST Debugging", "Collections"]
        }
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

  const levelColor = {
    "Beginner": "#94a3b8",
    "Intermediate": "#38bdf8",
    "Advanced": "#4ade80"
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
                      <div
                        key={i}
                        className="skill-pill"
                        onClick={() => setSelectedSkill(skill)}
                        title={`Click to learn more about ${skill.name}`}
                      >
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

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="skill-modal"
              initial={{ opacity: 0, scale: 0.75, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="modal-close-btn" onClick={() => setSelectedSkill(null)}>
                <FaTimes />
              </button>

              {/* Icon & Name */}
              <div className="modal-header-content">
                <div className="modal-skill-icon">{selectedSkill.icon}</div>
                <h3 className="modal-skill-name">{selectedSkill.name}</h3>
              </div>

              {/* Level Badge + Experience */}
              <div className="modal-meta">
                <span
                  className="modal-level-badge"
                  style={{ borderColor: levelColor[selectedSkill.level], color: levelColor[selectedSkill.level] }}
                >
                  {selectedSkill.level}
                </span>
                <span className="modal-experience">⏱ {selectedSkill.experience}</span>
              </div>

              {/* Description */}
              <p className="modal-description">{selectedSkill.description}</p>

              {/* Used In Tags */}
              <div className="modal-used-in">
                <span className="modal-used-label">Used in:</span>
                <div className="modal-tags">
                  {selectedSkill.usedIn.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};