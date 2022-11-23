import React from 'react';
import './task.css';
import {useToDoContext} from '../../context/ToDoContext'

const Task = ({task}) => {
  const {removeTask} = useToDoContext()
  return (
    <div className='task'>
      <span className='task-content'>{task.content}</span>
      <div>
        <i className="bi bi-check-lg"></i>
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash" onClick={() => removeTask(task.id)}></i>
      </div>
    </div>
  )
}

export default Task