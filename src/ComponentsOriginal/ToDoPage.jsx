import React from 'react';

const ToDoPage = () => {
    return (
        <div className='bg-sky-200 pt-8 text-center'>
            {/* INPUTS DIV */}
            <div className="w-[95%] mt-8 md:w-[70%]  flex flex-col space-x-2 sm:flex-row justify-between mx-auto bg-green-500  ">
               
                <div className="bg-slate-200 basis-2/3">
                 <h1 className="text-lg">Enter your Task here</h1>
                 <input type="text" placeholder='Enter your Task' className=" bg-pink-50 w-full h-10" />
                </div>

               <div className="bg-slate-200 flex flew-row sm:flex-col"> 
                <h1 className="text-lg">Start Date:</h1>
                 <input type="date" className=" bg-pink-50  w-[70%] sm:w-full ms-auto h-10" />
               </div>

               <div className="bg-slate-200  flex flew-row sm:flex-col">
               <h1 className="text-lg">End Date:</h1>
                 <input type="date" className=" bg-pink-50  w-[70%] sm:w-full  ms-auto h-10" />
               </div>

             </div>
             <button className='mx-auto w-44 bg-blue-700 text-white text-xl rounded-md my-2'>ADD</button>
             {/* TABLE DIV */}
             <div className="w-[95%] md:w-[80%] mx-auto bg-slate-500 rounded-sm">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-200 p-2 text-lg">YOUR TASKS</th>
              <th className="bg-pink-100 p-2 text-lg">Start & End Date</th>
              <th className="bg-pink-200 p-2 text-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="bg-slate-200">
              <td className="p-2">Example Task On small screens, everything is stacked and fills the width, ensuring it remains user-friendly.</td>
              <td className="p-2">2024-11-09 - 2024-11-10</td>
              <td className="p-2">
                <button className="text-red-500">Delete</button>
              </td>
            </tr>

            {/* Empty state */}
            <tr>
              <td colSpan="3" className="p-2 text-center text-gray-500">
                No tasks available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
           
    );
};

export default ToDoPage;