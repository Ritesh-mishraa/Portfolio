import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-wrapper">
            <h2 className="contact-title">Get In <span className="highlight">Touch</span></h2>
            <p className="contact-text">
              I am currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="mailto:rajmi8948360380@gmail.com" className="email-btn">
              <FaEnvelope style={{ marginRight: "10px" }} />
              Say Hello
            </a>

            <div className="social-icons-footer">
              <a href="https://github.com/Ritesh-mishraa" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ritesh-kumar-mishra-a7b8b3249/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
             <p className="copyright">
               Designed & Built by <span className="name-highlight">Ritesh Mishra</span>
             </p>
             
             {/* Scroll to Top Button */}
             <div className="scroll-top" onClick={scrollToTop}>
               <FaArrowUp />
             </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Contact;