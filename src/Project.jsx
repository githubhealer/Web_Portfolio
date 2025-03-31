import React from "react";

const Project = ({ title, color, ProjectComponent, setSelectedProject }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin:"20px",marginLeft: "40vw", padding: "5px" }}>
      <button
        style={{
          backgroundColor: color,
          padding: "12px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          border: "none",
          borderRadius: "8px",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => setSelectedProject(ProjectComponent)}
      >
        {title}
      </button>
    </div>
  );
};

export default Project;