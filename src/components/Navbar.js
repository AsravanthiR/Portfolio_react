import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <a href="#about" className="about">
          Sravanthi Avadhanula{" "}
        </a>
      </nav>
      <nav>
        <a href="#skills" className="skills">
          Skills
        </a>
      </nav>
      <nav>
        <a href="#projects" className="project">
          Projects
        </a>
      </nav>

      <nav>
        <a href="#contact" className="contact">
          Hire Me
        </a>
      </nav>
    </div>
  );
}
