import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const Tasks = () => {

    const taches = useSelector(state => state.tasks)
    return (
        <div>
            {
                taches.map(item => <Task key={item.id} task={item} />)
            }
        </div>
    );
}

export default Tasks;
