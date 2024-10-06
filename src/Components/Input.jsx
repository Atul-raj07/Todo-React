import React, { useState } from 'react'

const Input = (props) => {
    
  const [tasks, settask] = useState('');

  const {taskList,setTaskList} = props;

  const submitHandler =(e)=>{
    e.preventDefault()
    const task = {
        title: tasks,
        completed:false,
    }
  
    setTaskList([...taskList,task]);
    settask('')
    // e.target.reset();
  }

  return (
    <div className="mb-6">
    <form onSubmit={submitHandler} className="flex">
      <input 
        onChange={(e) => settask(e.target.value)}
        type="text"
        name="task"
        value={tasks}
        placeholder="Add a new task..."
        className="w-full text-black p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Add
      </button>
    </form>
  </div>
  )
}

export default Input