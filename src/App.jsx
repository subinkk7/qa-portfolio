import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import QALab from "./components/sections/QALab";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Stats from "./components/sections/Stats";
import CoreCompetencies from "./components/sections/CoreCompetencies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <QALab />
      <Resume />
      <Stats />
      <CoreCompetencies />
      <Footer />
    </>
  );
}

export default App;