import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Projects from "./Components/Project"
import Certifications from './Components/Certification';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar id="about"/>
      <About />
      <Skills id="skills" />
      <Projects id="projects" />
      <Certifications id="certifications" />
      <Contact id="contact"/>
    </>
  )
}

export default App
