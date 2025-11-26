import React, { useState, useEffect } from "react";
import { api } from "../api";
import TaskItem from "../components/TaskItem";

 function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const loadTasks = async () => {
    const res = await api.get("tasks/");
    setTasks(res.data);
  };

  const createTask = async () => {
    if (!text.trim()) return;
    await api.post("tasks/", { title: text });
    setText("");
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="todo-container">
      <h2>Your Tasks</h2>

      <div className="task-input-box">
        <input
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={createTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((t) => (
          <TaskItem key={t.id} item={t} load={loadTasks} />
        ))}
      </div>
    </div>
  );
}

export default Todo;