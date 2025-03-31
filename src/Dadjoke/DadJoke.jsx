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
    <div>
      <p id="content">{joke || "Click the button for a joke!"}</p>
      <button id="btn" onClick={fetchJoke}>Get a Joke</button>
    </div>
  );
};

export default JokeGenerator;
