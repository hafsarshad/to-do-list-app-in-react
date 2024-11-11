import React from 'react';
import Parent from './Components/Parent';
// import hand from './Images/4aec8143-416d-4f27-a435-6f9f12aa5800.jpg'
import ToDoPage from './ComponentsOriginal/ToDoPage'
const App = () => {
  return (
   <>
    <div className="bg-sky-200">
    <h1 className="text-4xl text-center text-sky-700">In-list Your Daily Tasks</h1>
      <h1 className=' text-3xl text-center text-sky-600'> To Make discipline in life and Map Your Mind</h1> 
     
      <ToDoPage/>
    </div>
     
  


   </>
  );
};

export default App;
