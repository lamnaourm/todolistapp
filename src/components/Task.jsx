import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

const Task = (props) => {
    return (
        <div className='task'>
            <h2>{props.task.completed ? <del>props.task.task</del> : props.task.task}</h2>
            <button><BsCheckCircleFill/> </button>
            <button><FaTrashAlt /> </button>
        </div>
    );
}

export default Task;
