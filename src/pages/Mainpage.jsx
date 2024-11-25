import React from 'react';
import './Mainpage.css';

function Mainpage() {
  const projects = [
    { name: "Project 1", description: "A brief description of your project." },
    { name: "Project 2", description: "A brief description of your project." },
    { name: "Project 3", description: "A brief description of your project." }
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Allen Joy Signo</h1>
        <p>Searching for Job Internship | Futuristic Vision</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hello! I am Allen Joy Signo, an aspiring professional seeking an
          internship opportunity to kickstart my career in a futuristic,
          innovative environment.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button className="project-btn">
                <span>Learn More</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, JavaScript</li>
          <li>Web Development: HTML, CSS, JavaScript</li>
          <li>Problem-Solving and Critical Thinking</li>
          <li>Other Relevant Skills</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
        <ul>
          <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
          <li>Phone: +123 456 7890</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">linkedin.com/in/your-profile</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2024 Allen Joy Signo. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Mainpage;
