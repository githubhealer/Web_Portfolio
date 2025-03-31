import React, { useState } from 'react';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import Recipe from './Medical/Medical';
import Quiz from './Quiz/Quiz';
import DadJoke from './Dadjoke/DadJoke';
import Todo from './Todo';
import Denominations from './Denominations';
import './App.css';
import './About.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    <Router>
      <nav>
        <h1 style={{ color: 'aqua' }}>Portfolio</h1>
        <nav className="right">
          <Link to="/Web_Portfolio">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/proj">Project</Link>
        </nav>
      </nav>
      <Routes>
        <Route path="/Web_Portfolio" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route
          path="/proj"
          element={
            selectedProject ? (
              <div>
                <button onClick={() => setSelectedProject(null)} style={{backgroundColor:"white",color:"black",fontSize:"20px",position:"absolute",top:"20vh"}}>Go Back</button>
                {selectedProject}
              </div>
            ) : (
              <>
                <Project title="Medical Diagnosis App" color="orange" ProjectComponent={<Recipe />} setSelectedProject={setSelectedProject} />
                <Project title="Quiz" color="red" ProjectComponent={<Quiz />} setSelectedProject={setSelectedProject} />
                <Project title="Joke Teller" color="blue" ProjectComponent={<DadJoke />} setSelectedProject={setSelectedProject} />
                <Project title="Bank challan for kids" color="purple" ProjectComponent={<Denominations/>} setSelectedProject={setSelectedProject} />
                <Project title="To Do List" color="green" ProjectComponent={<Todo />} setSelectedProject={setSelectedProject} />
              </>
            )
          }
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
