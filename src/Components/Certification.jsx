import React from 'react';

export default function Certifications(){
  return (
    <section id="certifications" className="py-5 bg-light">
      <div className="container">
        <h2 className="text mb-5 fw-bold display-5 ">
            <span className="border-bottom border-3 border-dark ">Certifications</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Certificate 1 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Database Management Systems</h5>
                <p className="card-text">
                    
                        Certified in Database Management System (DBMS) through an 8-week NPTEL course conducted by IIT Kharagpur, covering relational models, SQL, normalization, and transaction management.
                    
                    {/* <li>
                        Gained hands-on experience with database design, query optimization, and data consistency principles, enhancing practical skills for real-world database applications.
                    </li> */}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a
                  href="https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs18/Course/NPTEL25CS18S64830015301351433.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Programming In Java</h5>
                <p className="card-text">
                 
                    Certified in Programming in Java through a 12-week NPTEL course conducted by IIT Kharagpur.
                 
                 {/* <li>
                    Gained hands-on experience in core Java concepts such as object-oriented programming, exception handling, multithreading, file I/O, and GUI development using the Swing framework, enhancing both programming logic and user interface design skills through practical assignments.
                 </li> */}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a
                  href="https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs57/Course/NPTEL25CS57S115060015204431578.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Certificate 3 (Placeholder) */}
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Full-Stack Devlopment</h5>
                <p className="card-text">
                  Hands-on learning with modern web-devlopment technologies like MERN with the Certification from Apna College Platform.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a
                  href="https://drive.google.com/file/d/1PbaC3kfvviTMCAvLsAAVUMFTHCiLBtSw/view"
                  className="btn btn-outline-dark btn-sm "
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

