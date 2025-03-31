import React, { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const config = {
      headers: { Accept: "application/json" },
    };

    const response = await fetch("https://icanhazdadjoke.com/", config);
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width:"100vw",
      backgroundColor: "black",
      fontFamily: "Arial, sans-serif",
    }}>
      <p id="content" style={{
        fontSize: "20px",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        textAlign: "center",
      }}>
        {joke || "Click the button for a joke!"}
      </p>
      <button
        id="btn"
        onClick={fetchJoke}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#007BFF",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.2s",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Get a Joke
      </button>
    </div>
  );
};

export default JokeGenerator;