import React from 'react'

import { FaCheck, FaTrash } from 'react-icons/fa';

const Tasklist = (props) => {
    const {taskList,setTaskList} = props;



    const toggleTaskCompletion = (index) => {
        const updatedTasks = taskList.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        
        setTaskList(updatedTasks);
      };
    
    
      const deleteHandler = (index,task) => {
        
      if  (task.completed  || confirm("Are you sure you want to delete")){
    
        const updatedTasks = [...taskList];
        updatedTasks.splice(index, 1);
        setTaskList(updatedTasks);
      }else{
    
         alert("task  is not deleted");
       }
    
    
    
      }
    


  return (
    <div className="space-y-4">
      {/* Task Item (Example) */}

      {taskList.map((task,index) =>{
        return(
        // const {tite,completed}=Tasks;
        <div key={index} className='flex gap-4 items-center justify-between '>
        <div  
        onClick={()=>toggleTaskCompletion(index) } 
        className={`${!task.completed ? ' bg-gray-50' : 'bg-green-200'} flex justify-between min-w-[90%]   items-center p-3 text-black border border-gray-200 rounded-lg`}>
        <p className= {`${task.completed ? "line-through" : ""} font-semibold capitalize text-gray-800`} >{task.title}</p>
        <div className="flex space-x-2">
        {task.completed ?  <button className="text-green-500 hover:text-green-600 font-semibold">  <FaCheck /> </button> : null} 
          
        </div>
      </div>


      <button onClick={()=>deleteHandler(index,task)} className="text-red-500  hover:text-red-600 font-semibold">
  <FaTrash />
</button>
      </div>
        )
      })}
      
    </div>
  )
}

export default Tasklist