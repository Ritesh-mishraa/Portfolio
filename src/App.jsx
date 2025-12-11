import React, { useState, useEffect } from "react"; 
import Pre from "./Components/Pre";
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Projects from "./Components/Project"
import Certifications from './Components/Certification';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import ParticlesBackground from './Components/ParticlesBackground';
import Home from './Components/Home';
import WhatsAppBtn from "./Components/WhatsAppBtn";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Pre load={load} />
      <ParticlesBackground />
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Projects id="projects" />
      <Certifications />
      <Contact id="contact"/>
      <WhatsAppBtn />
    </>
  )
}

export default App
