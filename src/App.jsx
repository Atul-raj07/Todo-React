import React, { useState } from 'react';

const App = () => {

  const [task, settask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const submitHandler =(e)=>{
    e.preventDefault()
    setTaskList([...taskList,task]);
    settask("")
    console.log(taskList)
    e.target.reset()
  }
// console.log(taskList)
  return (
    <div className="flex h-screen w-full items-center justify-center">
      
        {/* <h1 className=''>TODO APP</h1> */}
        <div className="w-full  bg-zinc-200 max-w-md p-6 rounded-xl shadow-lg">
          {/* <!-- Task Summary --> */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
              <div className="text-right">
                <p className="text-gray-600">
                  Completed: <span className="text-green-500 font-semibold">1</span>
                </p>
                <p className="text-gray-600">
                  Total: <span className="text-blue-500 font-semibold">5</span>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Input Section --> */}
          <div className="mb-6">
            <div className="flex">
              <form onSubmit={submitHandler}>
                <input 
                onChange={(e)=>{settask(e.target.value)}}
                  type="text"
                  name='task'
                  placeholder="Add a new task..."
                  className="w-full text-black p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Add
                </button>
              </form>
            </div>
          </div>

          {/* <!-- Task List --> */}
          <div className="space-y-4">
            {/* <!-- Task Item (Example) --> */}
            <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-800">Complete the project documentation</p>
              <button className="text-green-500 hover:text-green-600 font-semibold">✓</button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-800">Fix the login issue</p>
              <button className="text-green-500 hover:text-green-600 font-semibold">✓</button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-800">Design new user interface</p>
              <button className="text-green-500 hover:text-green-600 font-semibold">✓</button>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default App;
