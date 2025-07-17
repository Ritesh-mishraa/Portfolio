export default function About(){
    return (
        <section id="about" className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      {/*  Profile Image  */}
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img src="riteshimage.jpg" alt="Ritesh Kumar Mishra" className="img-fluid rounded-circle shadow" width="200" />
      </div>

      
      <div className="col-md-8">
        <h2 className="text mb-5 fw-bold display-5 ">
            <span className="border-bottom border-3 border-dark ">About me</span>
        </h2>
        <p className="lead">
          Hello! I'm <strong>Ritesh Kumar Mishra </strong>, a passionate software developer with experience in building web applications using modern technologies like React, Bootstrap, and Node.js. I enjoy solving problems, designing beautiful interfaces, and constantly learning new things.
        </p>
        <p>
          When I'm not coding, you’ll find me exploring open-source projects, reading tech blogs, or experimenting with new design ideas. I'm currently open to exciting opportunities and collaborations!
        </p>

        {/*  Optional Buttons  */}
        
        <a href="/Riteshresume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">
        Download Resume
        </a>

      </div>
    </div>
  </div>
</section>

    );
}