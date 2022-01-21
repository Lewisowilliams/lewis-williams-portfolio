import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experiences from "./components/experiences/Experiences";
import Languages from "./components/Languages"
import Education from "./components/education/Education";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Experiences />
      <Education/>
      <Languages/>
      <Contact />
    </main>
  )
}
