import React, {useState} from 'react';
import './modal.css';
import ReactDOM from 'react-dom';
import {useToDoContext} from '../../context/ToDoContext'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({handleModal}) => {
  const [task, setTask] = useState({id: uuidv4()});

  const {handleTasks} = useToDoContext();

  const handleChange = (e) => {
    const {value} = e.target;
    setTask({...task, content: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTasks(task);
    handleModal();
  }

  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='modal'>
        <form action="" onSubmit={handleSubmit}>
          <textarea name="content" cols="20" rows="3" onChange={handleChange} defaultValue={task.content}></textarea>
          <button>agregar</button>
        </form>
          <button onClick={handleModal}>cerrar</button>
      </div>
    </div>
    , document.getElementById('modal')
  )
}

export default Modal