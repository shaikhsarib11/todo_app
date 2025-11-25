import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("access");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title, completed: false }, config);
    setTitle("");
    fetchTasks();
  };

  return (
    <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Add Task..." />
      <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TaskForm;
