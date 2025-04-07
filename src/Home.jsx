import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from './assets/arrow.jpeg';
import Recipe from './Medical'; // Adjust path if needed
import Quiz from './Quiz';
import DadJoke from './Dadjoke/DadJoke';
import Denominations from './Denominations';
import Todo from './Todo';
import './Home.css';

const Home = ({ setSelectedProject }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { title: "Medical Diagnosis App", color: "orange", component: <Recipe /> },
    { title: "Quiz", color: "red", component: <Quiz /> },
    { title: "Joke Teller", color: "blue", component: <DadJoke /> },
    { title: "Bank challan for kids", color: "purple", component: <Denominations /> },
    { title: "To Do List", color: "green", component: <Todo /> },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleClick = (component, title) => {
    console.log(`Selected: ${title}`);
    setSelectedProject(component);
    navigate("/proj");
  };

  return (
    <div className="homebody">
      <div className="slider">
        <button onClick={prevSlide} className="prev">
          <img src={arrow} height="30px" width="30px" alt="Previous" style={{ transform: "rotate(180deg)" }} />
        </button>

        <div className="white">
          <div
            className="slide-container"
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${currentSlide * 400}px)`,
              width: `${projects.length * 400}px`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => handleClick(project.component, project.title)}
                  style={{
                    backgroundColor: project.color,
                    padding: "12px 20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    width: "300px",
                    height: "80px",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  {project.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="next">
          <img src={arrow} height="30px" width="30px" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Home;
