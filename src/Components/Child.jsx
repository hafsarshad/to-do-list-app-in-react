import React, { useState } from 'react';

const Child = ({ addTask }) => {

    const[newTask,setNewTask]= useState('')
    
     const handleinput=()=>{
        addTask(newTask);
    }
   
    return (
        <div>
            <input  type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} className='bg-slate-400'/>
            <button onClick={handleinput}>addtask</button>
        </div>
    );
};

export default Child;