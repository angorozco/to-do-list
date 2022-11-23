import React, {useState} from 'react';
import './todolist.css'
import TaskList from '../../components/TaskList/TaskList';
import { useToDoContext } from '../../context/ToDoContext';
import Modal from '../../components/Modal/Modal';

const ToDoList = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const {tasks} = useToDoContext();

  const handleModal = () => {
    setisModalOpen(!isModalOpen);
  }

  return (
    <div className='app-container'>
        <div className='todolist'>
          <div className='title-container'>
           <h1>My To-Do List</h1>
          </div>
          <TaskList tasks={tasks}/>
          <button className='add-btn' onClick={handleModal}>+</button>
        </div>
        {isModalOpen && <Modal handleModal={handleModal}/>}
    </div>
  )
}

export default ToDoList