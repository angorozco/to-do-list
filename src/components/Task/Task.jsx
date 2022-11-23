import React from 'react';
import './task.css';

const Task = ({task}) => {
  return (
    <div className='task'>
      <span className='task-content'>{task.content}</span>
      <div>
        <i className="bi bi-check-lg"></i>
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  )
}

export default Task