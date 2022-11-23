import React, {useState} from 'react';
import './modal.css';
import ReactDOM from 'react-dom';
import {useToDoContext} from '../../context/ToDoContext'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({handleModal, task}) => {
  const [newTask, setNewTask] = useState(() => {
    return task || {id: uuidv4(), content: '', completed: false}
  });

  const {handleTasks} = useToDoContext();

  const handleChange = (e) => {
    const {value} = e.target;
    setNewTask({...newTask, content: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTasks(newTask);
    handleModal();
  }

  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='modal'>
      <button onClick={handleModal} className='btn btn-close'>X</button>
        <form action="" onSubmit={handleSubmit}>
          <textarea name="content" cols="20" rows="3" onChange={handleChange} defaultValue={newTask.content} className='message'></textarea>
          <button className='btn btn-add-modal'>
            {task ? 'editar' : 'agregar'}
          </button>
        </form>
      </div>
    </div>
    , document.getElementById('modal')
  )
}

export default Modal