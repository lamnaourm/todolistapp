import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../redux/ActionsCreators'


const Task = (props) => {
    
    const dispatch = useDispatch();

    return (
        <div className='task'>
            <h2>{props.task.completed ? <del>{props.task.task}</del> : props.task.task}</h2>
            <button onClick={() => dispatch(actionCreators.complete_task(props.task.id))}><BsCheckCircleFill/> </button>
            <button onClick={() => dispatch(actionCreators.delete_task(props.task.id))}><FaTrashAlt /> </button>
        </div>
    );
}

export default Task;
