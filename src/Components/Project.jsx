import React from 'react';



const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text mb-5 fw-bold display-5 ">
            <span className="border-bottom border-3 border-dark pb-1">My Projects</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Project Card 1 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src="wanderlust.png" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">A Full Stack Hotel Management Website</h5>
                <p className="card-text">
                    <li>
                        Wanderlust is a full-stack web application developed using Node.js, Express, MongoDB, and EJS for users to explore and list travel destinations with features like search by country, location, and title. Users can also give reviews and comments to the listings.
                    </li>
                    {/* <li>
                        Integrated Cloudinary for image uploads, user authentication with Passport.js, and implemented responsive UI usingBootstrap to ensure a mobile-first experience.
                    </li> */}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <a
                  href="https://github.com/Ritesh-mishraa/WanderLust.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://wanderlust-dz5h.onrender.com/listings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          
          {/* Project Card 2 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src="quickmeet.png" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">QuickMeet – Meet Instantly, Meet Securely.</h5>
                <p className="card-text">
                    <li>
                    A high-performance video conferencing application built with the MERN stack (MongoDB, Express.js, React, Node.js). QuickMeet leverages WebRTC for secure, peer-to-peer audio/video streaming and WebSockets for real-time signaling and chat. This project demonstrates complex state management in React and a scalable backend architecture for low-latency communication.
                    </li>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <a
                  href="https://github.com/Ritesh-mishraa/QuickMeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://quickmeetfrontend-2bay.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          {/* <div className="col">
            <div className="card h-100 shadow-sm">
              <img src="/project2.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Text Utility</h5>
                <p className="card-text">
                    <li>
                    This project provides a text utility to get the number of words and characters. User can also  convert their text into different font cases like CamelCase, Lowercase, and Uppercase.
                    </li>
                    <li>
                    In this project, React.js is used, and the front end is created by Bootstrap, HTML, and CSS
                    </li>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <a
                  href="https://github.com/Ritesh-mishraa/Text-Utils.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://yourliveproject2.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Websites
                </a>
              </div>
            </div>
          </div> */}

          {/* Project Card 3 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src="exploreIndianIsland.png" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Explore Indian Island</h5>
                <p className="card-text">
                  <li>
                    This project will help people to plan their trip to beautiful Indian Islands.
                  </li>
                  <li>
                    In this project, we have used HTML, CSS, and JavaScript for the front end and currently we are working on SQL for the backend of this project
                  </li>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <a
                  href="https://github.com/rudreshtiwari10/exploreindianislands.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
                {/* <a
                  href="https://yourliveproject3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Website
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
