import React from 'react'
import linkedin from './assets/linkedin.png'
import github from './assets/github.jpg'
import './Resume.css'
const Resume = () => {
    return(
        <div className="bodyres">
            <div className="template">
            <h1 style={{lineHeight:"1",color:"black"}}>Sandeep Ganesh D</h1>
            <p style={{lineHeight:"0",fontSize:"18px",color:"black"}}>AI ENTHUSIAST</p>
            <a href="https://www.linkedin.com/in/sandeep-ganesh-259063290/"><img src={linkedin} height="50px" width="50px" style={{marginLeft:"72vw",position:"absolute",top:"15vh"}}/></a>
            <a href="https://github.com/githubhealer"><img src={github} height="50px" width="50px" style={{marginLeft:"76vw",position:"absolute",top:"15vh"}}/></a>
            <h3 style={{color:"black",marginLeft:"70vw",position:"relative",top:"-3vh"}}>+91 7823921117<br/><span style={{marginLeft:"-12vw",fontWeight:"lighter"}}>sandeepganesh.d2023@vitstudent.ac.in</span></h3>
            <h2 style={{position:"relative",top:"-2pc",color:"black"}}>OBJECTIVE:</h2>
            <hr style={{border:"1px solid black",width:"98%",top:"-50px",left:"-10px"}}/>
            <p style={{position:"relative",top:"-3pc",color:"black"}}>
            Enthusiastic AI & Robotics student seeking an internship to apply automation skills in optimizing workflows. 
            <br/>Passionate about RPA, IoT, and AI-driven process automation, eager to contribute innovative solutions while gaining industry experience..</p>
            <h2 style={{ marginTop: "-40px", marginBottom: "5px",color:"black" }}>SKILLS & ABILITIES</h2>
                <hr style={{ border: "1px solid black", width: "100%" }} />
                <div style={{ display: "flex", }}>
                    <div style={{color:"black"}}>
                        <h3 >Technical Skills</h3>
                        <ul style={{lineHeight: "1.8"}}>
                            <li>C, Java, Python</li>
                            <li>HTML, JavaScript, CSS</li>
                            <li>Robotics & Automation (hands-on)</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div style={{color:"black"}}>
                        <h3>Tools & Platforms</h3>
                        <ul style={{ lineHeight: "1.8" }}>
                            <li>VS Code</li>
                            <li>Azure</li>
                            <li>Ubuntu</li>
                            <li>Oracle</li>
                        </ul>
                    </div>
                </div>
                <h2 style={{ marginTop: "20px", marginBottom: "5px",color:"black"}}>PROJECTS & RESEARCH WORKS</h2>
                <hr style={{ border: "1px solid black", width: "100%" }} />
                <ul style={{ lineHeight: "1.8", color: "black" }}>
                    <li><b>2025:</b> Built a robotic arm using ESP-32 microcontroller for precise movement control.</li>
                    <li><b>2024:</b> Simulated IoT-based temperature sensing using Contiki-NG.</li>
                    <li><b>2023:</b> <b>Developed a facial recognition system</b> using Deep Learning APIs to automate attendance.</li>
                    <li><b>2019:</b> Participated in numerous robotics and science competitions.</li>
                </ul>

                <h2 style={{ marginTop: "20px", marginBottom: "5px",color:"black" }}>EDUCATION</h2>
                <hr style={{ border: "1px solid black", width: "100%" }} />
                <p style={{color:"black"}}><b>March 2025:</b> B.Tech – 2nd year, Vellore Institute of Technology</p>
                <p style={{ marginLeft: "15px",color:"black" }}>Major – Computer Science with specialization in AI & Robotics (9.14 CGPA)</p>
                <p style={{color:"black"}}><b>April 2023:</b> XII class – completed (94.6%)</p>
                <p style={{color:"black"}}><b>April 2021:</b> X class – completed (95%)</p>

                <h2 style={{ marginTop: "20px", marginBottom: "5px",color:"black" }}>EXTRACURRICULAR ACTIVITIES</h2>
                <hr style={{ border: "1px solid black", width: "100%" }} />
                <ul style={{ lineHeight: "1.8", color:"black" }}>
                    <li>Robotics Enthusiast since school days.</li>
                    <li>Member, University’s Special Robotics Team (TCR).</li>
                    <li>Other interests: Music (keyboard) and Tennis.</li>
                </ul>
            </div>
        </div>
    )
}
export default Resume