import React, { useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const App = () => {

  const [taskList, setTaskList] = useState([]);

  const [tasks, settask] = useState('');


  const submitHandler =(e)=>{
    e.preventDefault()
    // console.log(tasks.task)
    setTaskList([...taskList,tasks]);
    settask('')
    e.target.reset();
  }
  return (

<div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
  <div className="w-full bg-white max-w-md p-8 rounded-xl shadow-lg">
    {/* Task Summary */}
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
        <div className="text-right">
          <p className="text-gray-600">
            Completed: <span className="text-green-500 font-semibold">{taskList.filter((task)=> task.completed).length}</span>
          </p>
          <p className="text-gray-600">
            Total: <span className="text-blue-500 font-semibold">{taskList.length}</span>
          </p>
        </div>
      </div>
    </div>

    {/* Input Section */}
    <div className="mb-6">
      <form onSubmit={submitHandler} className="flex">
        <input 
          onChange={(e) => settask({
           task:e.target.value,
           completed:true,
          })}
          type="text"
          name="task"
          value={tasks.task}
          placeholder="Add a new task..."
          className="w-full text-black p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Add
        </button>
      </form>
    </div>

    {/* Task List */}
    <div className="space-y-4">
      {/* Task Item (Example) */}

      {taskList.map((task,index) =>{
        return(
        // const {tite,completed}=Tasks;
        <div key={index} 
        onClick={()=>{
          task.completed = !task.completed;
          console.log(task.completed)
        }} 
        className="flex justify-between items-center p-3 text-black bg-gray-50 border border-gray-200 rounded-lg">
        <p className={`${task.completed ? 'bg-red-600' : 'bg-green-400'}text-gray-800 `}>{task.task}</p>
        <div className="flex space-x-2">
        {task.completed ?  <button className="text-green-500 hover:text-green-600 font-semibold">  <FaCheck /> </button> : null} 
          <button className="text-red-500 hover:text-red-600 font-semibold">
            <FaTrash />
          </button>
        </div>
      </div>
        )
      })}
      
    </div>
  </div>
</div>

  );
};

export default App;
