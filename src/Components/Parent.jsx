import React, { useState } from 'react';
import {Table,Button} from 'antd';

import Child from './Child'

const Parent = () => {
    const[TaskArray, setTaskArray] = useState([])
    const addTask = (taskfromchild) => {
        setTaskArray([...TaskArray,taskfromchild])
    }

   
    console.log(TaskArray)
    
    const columns = [
      {
        title: 'No',
        width: 50, // A small fixed width is fine for this column
        key: 'index',
        responsive: ['xs', 'sm', 'md', 'lg'],
        render: (text, record, index) => <span>{index + 1}</span>,
      },
      {
        title: 'Task',
        dataIndex: 'task',
        key: 'task',
        responsive: ['xs', 'sm', 'md', 'lg'],
        render: (text) => (
          <div className="w-full xs:w-[100px] sm:w-[200px] lg:w-[700px] whitespace-normal break-words">
            {text}
          </div>
        ),
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        responsive: ['xs', 'sm', 'md', 'lg'],
        render: (text) => (
          <div className="whitespace-normal break-words">
            {text}
          </div>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        responsive: ['xs', 'sm', 'md', 'lg'],
        
      },
    ];
    const data = TaskArray.map((task, index) => ({
      key: index + 1,
      task: task.task, // Correctly access the task text
      date: task.date, // Correctly access the date
    }));
  
    return (
      <>
          <Child addTask={addTask}/>
          <div className="overflow-x-auto p-4 md:w-11/12 mx-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: true }} // Allows horizontal scrolling if needed
          className="w-full"
        />
      </div>
      </>
  
      );
};

export default Parent;