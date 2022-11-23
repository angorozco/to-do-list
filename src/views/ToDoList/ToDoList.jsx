import React from 'react';
import './todolist.css'
import TaskList from '../../components/TaskList/TaskList';
import { useToDoContext } from '../../context/ToDoContext';

const ToDoList = () => {
  const {tasks} = useToDoContext();
  return (
    <div className='app-container'>
        <div className='todolist'>
        <div className='title-container'>
          <h1>My To-Do List</h1>
        </div>
        <TaskList tasks={tasks}/>
        <button className='add-btn'>+</button>
      </div>
    </div>
  )
}

export default ToDoList