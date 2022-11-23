import React, {useState} from 'react';
import './task.css';
import {useToDoContext} from '../../context/ToDoContext'
import Modal from '../Modal/Modal';
import classNames from 'classnames'

const Task = ({task}) => {
  const {removeTask, handleTaskState} = useToDoContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const styles = classNames( {
    completed: task.completed
  })

  return (
    <div className='task'>
      <span className={`task-content ${styles}`} >{task.content}</span>
      <div className={styles}>
        <i className="bi bi-check-lg" onClick={() => handleTaskState(task.id)}></i>
        <i className="bi bi-pencil" onClick={handleModal}></i>
        <i className="bi bi-trash" onClick={() => removeTask(task.id)}></i>
      </div>
      {isModalOpen && <Modal handleModal={handleModal} task={task}/>}
    </div>
    
  )
}

export default Task