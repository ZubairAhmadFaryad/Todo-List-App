import React from "react";

const TodoList = ({ tasks, onDelete }) => {
  const handleView = (task) => {
    alert(`Task: ${task.text}\nDate: ${task.date}\nPriority: ${task.priority}`);
  };

  return (
    <div className="task-grid">
      {/* Grid Headers */}
      <div className="task-header">View</div>
      <div className="task-header">Task</div>
      <div className="task-header">Date</div>
      <div className="task-header">Priority</div>
      <div className="task-header">Delete</div>

      {/* Task Rows */}
      {tasks.map((task, index) => (
        <>
          <div className="task-cell">
            <button className="view-btn" onClick={() => handleView(task)}>
              👁 View
            </button>
          </div>
          <div className="task-cell">
            <span className="task-text">{task.text}</span>
          </div>
          <div className="task-cell">{task.date}</div>
          <div className="task-cell">
            <span className={`priority-badge ${task.priority}`}>
              {task.priority.toUpperCase()}
            </span>
          </div>
          <div className="task-cell">
            <button className="delete-btn" onClick={() => onDelete(index)}>
              🗑 Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default TodoList;
