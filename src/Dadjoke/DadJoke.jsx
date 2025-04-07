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
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        position:"absolute",
        top:"0vh",
        left:"40vw"
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            marginBottom: "20px",
            lineHeight: "1.5",
          }}
        >
          {joke || "Click the button for a joke!"}
        </p>
        <button
          onClick={fetchJoke}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          Get a Joke
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
