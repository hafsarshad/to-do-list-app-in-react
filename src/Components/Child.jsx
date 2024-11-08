import React, { useState } from 'react';
import {Col, Row , Input,Button} from 'antd'

const Child = ({addTask}) => {

    const[newTask,setNewTask]= useState('')
    const [taskDate, setTaskDate] = useState('');

   
  const handleInput = () => {
    if (newTask && taskDate) {
      addTask({ task: newTask, date: taskDate }); // Pass both task and date
      setNewTask(''); // Clear input fields after adding the task
      setTaskDate('');
    } else {
      alert('Please enter both task and date');
    }
  };
   
    return (
        <Row  justify="center"  gutter={[16, 16]}  className="p-4">
            <Col xs={24} sm={20} md={8}  >
              <h1 className='text-base '>Enter Task</h1>
              <Input  value={newTask}   onChange={(e) => setNewTask(e.target.value)} className='h-9 bg-sky-300 w-full '/>
            </Col>

            <Col xs={24} sm={20} md={8}  >
             <h1>Enter Task Date</h1>
             <input  type="date"  value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='h-9 rounded-md bg-sky-300 w-full' />
            </Col>

            <Col sm={20} md={4} className='pt-4  flex justify-center items-center'>
            <Button onClick={handleInput} type="primary" className='w-40'>
                AddTask
            </Button>
            </Col>
        </Row>
    );
};

export default Child;

       
