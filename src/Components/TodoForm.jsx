// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("normal");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date.trim()) {
      onAddTask({ text: task, priority, date });
      setTask("");
      setPriority("normal");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
