import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Recipe from './Medical';
import Quiz from './Quiz';
import DadJoke from './Dadjoke/DadJoke';
import Todo from './Todo';
import Denominations from './Denominations';
import Home from './Home';
import './App.css';
import './About.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <Router>
        <nav>
          <h1 style={{ color: 'aqua' }}>
            PORT<span style={{ color: 'white' }}>FOLIO</span>
          </h1>
          <ul type="none" style={{ display: 'flex', marginLeft: '40vw', marginTop: '8vh' }}>
            <li>
              <Link to="/Web_Portfolio" className="navitem">
                About
              </Link>
            </li>
            <li>
              <Link to="/Project" className="navitem">
                Project
              </Link>
            </li>
            <li>
              <Link to="/resume" className="navitem">
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Project" element={<Home setSelectedProject={setSelectedProject} />} />
          <Route path="/Web_Portfolio" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/proj"
            element={
              selectedProject ? (
                <ProjectView selectedProject={selectedProject} clearProject={() => setSelectedProject(null)} />
              ) : (
                <h2 style={{ marginTop: '20vh', textAlign: 'center', color: 'white' }}>
                  No project selected. Go to "Projects" tab to choose one.
                </h2>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

// Sub-component to handle displaying project with back navigation
const ProjectView = ({ selectedProject, clearProject }) => {
  const navigate = useNavigate();

  const goBack = () => {
    clearProject();
    navigate('/Project');
  };

  return (
    <div>
      <button
        onClick={goBack}
        style={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: '20px',
          position: 'absolute',
          top: '20vh',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
      <div style={{ marginTop: '25vh' }}>{selectedProject}</div>
    </div>
  );
};

export default App;
