import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim() || tasks.length >= 5) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10vh" ,marginLeft: "35vw"}}>
    <div style={{position:"absolute",top:"20vh"}}>
      <h2>To-Do List</h2>
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "16px",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          disabled={tasks.length >= 5}
        >
          Add
        </button>
      </form>
      </div>
      {tasks.length >= 5 && (
        <h2 style={{ color: "red", fontSize: "14px", marginLeft: "30vw",fontSize:"20px" }}>
          You can only add up to 5 tasks.
        </h2>
      )}
      <ul style={{ listStyle: "none", padding: 0, marginLeft: "0vw", marginRight: "auto",marginBottom:"-20vh", width: "300px" }}>
        <h3 style={{position:"absolute",top:"40vh",marginLeft:"8vw"}}>Task List</h3>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              color:"black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <span>{t}</span>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                fontSize: "14px",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => deleteTask(index)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
