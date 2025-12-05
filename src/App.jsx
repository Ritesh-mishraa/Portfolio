import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Projects from "./Components/Project"
import Certifications from './Components/Certification';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import ParticlesBackground from './Components/ParticlesBackground';
import Home from './Components/Home';

function App() {
  return (
    <>
      
      <Navbar/>
      <ParticlesBackground />
      <Home />
      <About />
      <Skills />
      <Projects id="projects" />
      <Certifications />
      <Contact id="contact"/>
    </>
  )
}

export default App
