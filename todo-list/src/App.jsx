import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [input, setInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  function addTask(event) {
    event.preventDefault();
    if (editTaskId !== null) {
      const taskList = tasks.map((task) =>
        task.id === editTaskId ? { ...task, taskTitle: input } : task
      );
      setTasks(taskList);
      setEditTaskId(null);
    } else {
      const newTask = { id: uuidv4(), taskTitle: input, isCompleted: false };
      const taskList = [...tasks, newTask];
      setTasks(taskList);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setInput("");
  }

  function editTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditTaskId(id);
      setInput(taskToEdit.taskTitle);
    }
  }

  function deleteTask(id) {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  function taskCompletion(id) {
    const taskList = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  return (
    <div className="todo-container">
      <h1>
        <span className="second-title">Todo List App</span>
      </h1>
      <form onSubmit={addTask}>
        <input
          className="add-task"
          type="text"
          placeholder="Add new task ..."
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button type="submit" className="add-button">
          {editTaskId !== null ? "Edit" : "Add"}
        </button>
      </form>

      <div className="todo-list">
        {tasks.map((task) => {
          return (
            <div className="todo" key={task.id}>
              <div className="todo-text">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={`isCompleted-${task.id}`}
                  checked={task.isCompleted}
                  onChange={() => taskCompletion(task.id)}
                />
              </div>
              <div>{task.taskTitle}</div>

              <div className="todo-actions">
                <button
                  className="submit-edits"
                  onClick={() => editTask(task.id)}
                >
                  Edit
                </button>
                <button
                  className="submit-edits"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
