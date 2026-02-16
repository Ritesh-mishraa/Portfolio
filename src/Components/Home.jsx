import React from 'react';
import { Container, Row, Col } from "react-bootstrap"; 
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import './Home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-area"
        >
          <h2 className="greeting">
            Hello There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </h2>

          <h1 className="heading-name">
            I'M <strong className="main-name">RITESH MISHRA</strong>
          </h1>

          <div className="typewriter-text">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1500,
                "Open Source Contributor",
                1500,
                "React.js Enthusiast",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', fontWeight: 'bold', color: '#38bdf8' }}
            />
          </div>

          <p className="description">
            I build scalable web applications and intuitive user interfaces. 
            Passionate about <b>JavaScript, React, and Backend Systems.</b>
          </p>

          <div className="social-links">
            <a href="https://github.com/Ritesh-mishraa" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ritesh-kumar-mishra-a7b8b3249/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:rajmi8948360380@gmail.com" className="social-btn">
              <FaEnvelope />
            </a>
          </div>

          <div className="cta-buttons">
            <a href='Riteshresume.pdf'
            download="Ritesh-Mishra-Resume.pdf"
            className='btn-primary'>
                Download Resume
            </a>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="image-area"
        >
          <img 
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png" 
            alt="Ritesh Avatar" 
            className="img-fluid" 
            style={{ maxHeight: "450px" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;