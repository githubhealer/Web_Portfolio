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
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          position:"absolute",
          top:"20vh",
          left:"35vw",
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        <h2>To-Do List</h2>
        <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              padding: "8px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "green",
              color: "white",
              fontSize: "16px",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            disabled={tasks.length >= 5}
          >
            Add
          </button>
        </form>

        {tasks.length >= 5 && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            You can only add up to 5 tasks.
          </p>
        )}

        <h3 style={{ marginBottom: "10px" }}>Task List</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "white",
                color: "black",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
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
                  borderRadius: "5px",
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
    </div>
  );
};

export default TodoApp;
