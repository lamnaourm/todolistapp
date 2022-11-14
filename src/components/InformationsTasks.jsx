import React from 'react';
import { useSelector } from 'react-redux';

const InformationsTasks = () => {

    const taches = useSelector(state => state.tasks);

    return (
        <div className='information'>
            <h2>Nombre totale : {taches.length}</h2>
            <h2>Nombre taches incomplets : {taches.filter(item => item.completed).length}</h2>
            <h2>Nombre taches termines : {taches.filter(item => !item.completed).length}</h2>
        </div>
    );
}

export default InformationsTasks;
