import React from "react";
import  {api} from "../api";

 function TaskItem({ item, load }) {
  const toggle = async () => {
    await api.put('tasks/${item.id}/',
    {
      ...item,
      completed: !item.completed,
    });
    load();
  };

  const remove = async () => {
    await api.delete('tasks/${item.id}/');
    load();
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={item.completed} onChange={toggle} />

      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.title}
      </span>

      <button className="delete-btn" onClick={remove}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;