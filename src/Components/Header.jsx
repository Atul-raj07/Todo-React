import React from 'react'

const Header = (props) => {
    const {taskList} = props;
    
  return (
    <div className="mb-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">MY DAY</h2>
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
  )
}

export default Header