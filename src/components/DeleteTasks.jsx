import React from 'react';

const DeleteTasks = () => {
    return (
        <div className='delete'>
            <button>Supprimer tous</button>
            <button>Supprimer completes</button>
            <button>Supprimer incomplets</button>
        </div>
    );
}

export default DeleteTasks;
