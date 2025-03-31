import React from 'react'
import photo from './assets/rprojphoto.jpg'
import './About.css'
const About = () => {
    return(
        <div className="body">
            <div className="text">
                <h2>About Me</h2>
                <p>
                    I'm <strong>Sandeep Ganesh Deepak Ganesh</strong>, a B.Tech student at <strong>VIT University</strong> with a CGPA of 9.14. 
                    Passionate about <strong>embedded systems and robotics</strong>, I'm part of the electrical team for my college's 
                    basketball-playing robot, specifically working on the <strong>hooking mechanism</strong>.
                </p>
                <p>
                    I also have a strong interest in <strong>computer science and programming</strong>. I’ve worked with technologies like 
                    <strong>C, Java, OpenMP, React,</strong> and <strong>PowerShell with Linux commands</strong>. My projects include 
                    sorting algorithms, process scheduling, exception handling, and socket programming.
                </p>
                <p>
                    Beyond academics, I actively participate in <strong>hackathons</strong>. Recently, I worked on a waste management project, 
                    developing a model to classify waste using sensor data.
                </p>
            </div>
        <img style={{borderRadius:"100%",position:"absolute",top:"150px",left:"85vw"}}src={photo} height="350px" width="200px" alt="Sandeep"/>
        </div>
    )
}
export default About