import React, { useState } from 'react';
import Child from './Child'
const Parent = () => {
    const[TaskArray, setTaskArray] = useState([])

    const addTask = (taskfromchild) => {
        setTaskArray([...TaskArray,taskfromchild])
    }
    console.log(TaskArray)
    
    return (
        <div>
         
          <div className='mt-7 mx-auto sm:w-11/12 md:w-4/5 bg-sky-500 overflow-x-auto rounded-md '>
            
            <div className="table w-[98%] mx-auto my-2 rounded-md bg-sky-200 ">
                    <div className="table-header-group">
                        <div className="table-row ">
                            <div className="table-cell border  border-blue-500 w-10">No</div>
                            <div className="table-cell border  border-blue-500 sm:w-60 lg:w-3/4">Task title</div>
                            <div className="table-cell border  border-blue-500">Date</div>
                            <div className="table-cell border   border-blue-500">Actions</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {TaskArray.map((taskfromchild,index)=>(
                            <div className="table-row" >
                            <div className="table-cell border  border-blue-500"></div>
                            <div className="table-cell border  border-blue-500" key={index}>{taskfromchild}</div>
                            <div className="table-cell border  border-blue-500"></div>
                            <div className="table-cell border  border-blue-500"></div>
                        </div>
                        ))}
                        
                    </div>
                </div> 
          </div>
           
        
            <Child addTask={addTask}/>
        </div>
    );
};

export default Parent;