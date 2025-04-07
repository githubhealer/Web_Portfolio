import React from 'react';
import linkedin from './assets/linkedin.png';
import github from './assets/github.jpg';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div>
          <h1>Sandeep Ganesh D</h1>
          <p>AI ENTHUSIAST</p>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/sandeep-ganesh-259063290/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/githubhealer" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div className="contact-info">
          <p>📞 +91 7823921117</p>
          <p>📧 sandeepganesh.d2023@vitstudent.ac.in</p>
        </div>
      </header>

      <section>
        <h2>Objective</h2>
        <p>
          Enthusiastic AI & Robotics student seeking an internship to apply automation skills in optimizing workflows.
          Passionate about RPA, IoT, and AI-driven process automation, eager to contribute innovative solutions while
          gaining industry experience.
        </p>
      </section>

      <section>
        <h2>Skills & Abilities</h2>
        <div className="skills">
          <div>
            <h3>Technical Skills</h3>
            <ul>
              <li>C, Java, Python</li>
              <li>HTML, JavaScript, CSS</li>
              <li>Robotics & Automation (hands-on)</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3>Tools & Platforms</h3>
            <ul>
              <li>VS Code</li>
              <li>Azure</li>
              <li>Ubuntu</li>
              <li>Oracle</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects & Research Works</h2>
        <ul>
          <li><strong>2025:</strong> Built a robotic arm using ESP-32 microcontroller for precise movement control.</li>
          <li><strong>2024:</strong> Simulated IoT-based temperature sensing using Contiki-NG.</li>
          <li><strong>2023:</strong> Developed a facial recognition system using Deep Learning APIs.</li>
          <li><strong>2019:</strong> Participated in numerous robotics and science competitions.</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>March 2025:</strong> B.Tech – 2nd year, Vellore Institute of Technology (9.14 CGPA)</p>
        <p><strong>April 2023:</strong> XII class – completed (94.6%)</p>
        <p><strong>April 2021:</strong> X class – completed (95%)</p>
      </section>

      <section>
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Robotics Enthusiast since school days.</li>
          <li>Member, University’s Special Robotics Team (TCR).</li>
          <li>Other interests: Music (keyboard) and Tennis.</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
