// TodoApp.js
import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import SearchBar from "./Components/searchbar";

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handlePriorityChange = (index, priority) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="todo-container">
      <h1 className="todo-title">📝 My To-Do List</h1>
      <SearchBar onSearch={handleSearch} />
      <TodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onPriorityChange={handlePriorityChange}
      />
    </div>
  );
};

export default TodoApp;
