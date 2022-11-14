import React, { useState } from 'react';
import { GoDiffAdded } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../redux/ActionsCreators'



const AddTask = () => {

    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const add = () => {
        if(description===''){
            alert('Desciption de la tache vide');
            return;
        }

        dispatch(actionCreators.add_task(description));
    }
    return (
        <div className='add'>
            <input type="text" placeholder='Saisir une description ...' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={add}><GoDiffAdded /></button>
        </div>
    );
}

export default AddTask;
