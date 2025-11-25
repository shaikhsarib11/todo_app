import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("access");

  const config = { headers: { Authorization: `Bearer ${token}` } };

  const fetchTasks = async () => {
    const res = await axios.get(API_URL + `?search=${search}`, config);
    setTasks(res.data.results);
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  const toggleTask = async (task) => {
    await axios.put(API_URL + task.id + "/", { ...task, completed: !task.completed }, config);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(API_URL + id + "/", config);
    fetchTasks();
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Todo App</h1>
      <input placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <TaskForm fetchTasks={fetchTasks} />
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span onClick={()=>toggleTask(task)} style={{textDecoration: task.completed ? "line-through": "none", cursor:'pointer'}}>
              {task.title}
            </span>
            <button onClick={()=>deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
