import React from 'react';

export default function Contact(){
    return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">

        
        <h1 className="mb-3 fw-bold ">
            <span className="border-bottom border-3 border-dark pb-1">Contact Me</span>
        </h1>

        {/* Contact Info */}
        <p className="mb-1">
          <i className="bi bi-envelope-fill me-2"></i>
          <a href="mailto: rajmi8948360380@gmail.com" className="text-light text-decoration-none">
           rajmi8948360380@gmail.com
          </a>
        </p>
        <p className="mb-3">
          <i className="bi bi-telephone-fill me-2"></i>
          <a href="tel:+918948360380" className="text-light text-decoration-none">
            +91 8948360380
          </a>
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://www.linkedin.com/in/ritesh-kumar-mishra-a7b8b3249/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light rounded-circle"
            style={{ width: '40px', height: '40px' }}
          >
            <i className="bi bi-linkedin fs-5"></i>
          </a>
          <a
            href="https://github.com/Ritesh-mishraa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light rounded-circle"
            style={{ width: '40px', height: '40px' }}
          >
            <i className="bi bi-github fs-5"></i>
          </a>
          <a
            href="https://instagram.com/ritesh.mishra_14"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light rounded-circle"
            style={{ width: '40px', height: '40px' }}
          >
            <i className="bi bi-instagram fs-5"></i>
          </a>
          <a
            href="https://twitter.com/Ritesh_Mishra_9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light rounded-circle"
            style={{ width: '40px', height: '40px' }}
          >
            <i className="bi bi-twitter fs-5"></i>
          </a>
        </div>

        {/* Copyright */}
        <small className="text-muted bg">&copy; {new Date().getFullYear()} Ritesh Mishra. All rights reserved.</small>
      </div>
    </footer>
  );
}