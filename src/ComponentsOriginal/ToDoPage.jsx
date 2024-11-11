import React, { useState, useEffect } from 'react';
import del from '../Images/trash-solid.svg';
import edit from '../Images/pen-to-square-solid.svg';

const ToDoPage = () => {
  const [Task, setTask] = useState("");
  const [Start, setStart] = useState("");
  const [End, setEnd] = useState("");
  const [Data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track index of task being edited
  
  // Save tasks to localStorage whenever Data changes
  useEffect(() => {
    if (Data.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(Data)); // Store updated data in localStorage
    }
  }, [Data]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      setData(JSON.parse(storedData)); // Set the data from localStorage
    }
  }, []);

  
  const addOrUpdateTask = () => {
    if (Task && Start && End) {
      const newData = { Task, Start, End };

      if (editIndex !== null) {
        // Update the existing task
        const updatedData = Data.map((item, index) =>
          index === editIndex ? newData : item
        );
        setData(updatedData);
        setEditIndex(null); // Clear edit index after update
      } else {
        // Add new task
        setData([...Data, newData]);
      }

      // Clear input fields
      setTask("");
      setStart("");
      setEnd("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedData = Data.filter((_, index) => index !== indexToDelete);
    setData(updatedData); // Remove task from state
  };

  const editTask = (index) => {
    // Set the task being edited in the input fields
    const taskToEdit = Data[index];
    setTask(taskToEdit.Task);
    setStart(taskToEdit.Start);
    setEnd(taskToEdit.End);
    setEditIndex(index); // Track which task is being edited
  };

  return (
    <div className="bg-sky-200 pt-8 text-center">
      {/* INPUTS DIV */}
      <div className="w-[95%] mt-8 md:w-[70%] py-5 bg-blue-400 flex flex-col sm:flex-row space-x-2 justify-between mx-auto rounded-md">
        <div className="basis-2/3 p-2">
          <h1 className="text-lg text-left">Enter your Task here</h1>
          <input
            type="text"
            placeholder="Enter your Task"
            className="w-full h-10 rounded-md"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="p-2 flex sm:flex-col items-center">
          <h1 className="text-lg text-left">Start Date:</h1>
          <input
            type="date"
            className="w-[70%] sm:w-full ms-auto h-10 rounded-md"
            value={Start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="p-2 flex sm:flex-col items-center">
          <h1 className="text-lg text-left">End Date:</h1>
          <input
            type="date"
            className="w-[70%] sm:w-full ms-auto h-10 rounded-md"
            value={End}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={addOrUpdateTask}
        className="mx-auto w-44 bg-blue-700 text-white text-xl rounded-md my-2"
      >
        {editIndex !== null ? "Update Task" : "ADD"} {/* Change button text based on edit state */}
      </button>

      {/* TABLE DIV */}
      <div className="w-[95%] md:w-[80%] mx-auto rounded-sm">
        <table className="w-full table-auto text-left border border-blue-700 bg-sky-200">
          <thead>
            <tr>
              <th className="p-2 border border-blue-700 text-lg">sr</th>
              <th className="p-2 border border-blue-700 text-lg col">YOUR TASKS</th>
              <th className="p-2 border border-blue-700 text-lg">Start & End Date</th>
              <th className="p-2 text-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data.length > 0 ? (
              Data.map((item, index) => (
                <tr key={index} className="border border-blue-700">
                  <td className="p-2 border border-blue-700">{index + 1}</td>
                  <td className="p-2 border border-blue-700">{item.Task}</td>
                  <td className="p-2 border border-blue-700">
                    {item.Start} - {item.End}
                  </td>
                  <td className="p-2 border border-blue-700">
                    <button className="me-2" onClick={() => editTask(index)}>
                      <img src={edit} className="w-4 h-9" alt="Edit" />
                    </button>
                    <button onClick={() => deleteTask(index)} className="ms-1">
                      <img src={del} className="w-4 h-9" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-2 text-center text-gray-500">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDoPage;
