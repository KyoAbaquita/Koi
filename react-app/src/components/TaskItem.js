import React from 'react';

// TaskItem Component
const TaskItem = ({ task, markComplete }) => {
  return (
    <tr className={`task-item ${task.completed ? 'completed' : ''}`}>
      <td>{task.text}</td>
      <td>
        {task.completed ? (
          <span className="completed-text"> Completed </span>
        ) : (
          <button onClick={markComplete}>Complete</button>
        )}
      </td>
    </tr>
  );
};

export default TaskItem;
