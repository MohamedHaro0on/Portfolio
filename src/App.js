import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Header/Header.jsx";
import Practiles from "react-particles-js"
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowHeight = "1400px";
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  })
  return (
    <div>
      <Practiles width={windowWidth} height={windowHeight} />
      <div className="App">
        <Header />
        <main>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </div>
    </div>

  );
}

export default App;