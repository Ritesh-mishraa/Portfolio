import React from 'react';

export default function Skills() {
  const skillCategories = {
    "Languages": ["Java", "JavaScript", "SQL"],
    "Frontend": ["HTML5", "CSS3","React", "Bootstrap" ],
    "Backend": ["Node.js", "Express"],
    "Database": ["MongoDB", "MySQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code"],
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
         <h2 className="text mb-5 fw-bold display-5 ">
            <span className="border-bottom border-3 border-dark ">Skills</span>
        </h2>

        <div className="row g-4">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-semibold">{category}</h5>
                  <ul className="list-unstyled mt-3">
                    {skills.map((skill, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


