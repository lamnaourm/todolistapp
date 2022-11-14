import React from 'react';
import { GoDiffAdded } from 'react-icons/go';


const AddTask = () => {
    return (
        <div className='add'>
            <input type="text" placeholder='Saisir une description ...' />
            <button><GoDiffAdded /></button>
        </div>
    );
}

export default AddTask;
