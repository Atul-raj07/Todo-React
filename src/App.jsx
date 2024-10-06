import React, { useState } from 'react';
import Header from './Components/Header';
import Input from './Components/Input';
import Tasklist from './Components/Tasklist';

const App = () => {

  const [taskList, setTaskList] = useState([]);




  // jsx start
  return (
<div className=' min-h-screen bg-zinc-300 w-full flex  justify-center p-4'>
  <div className="w-[40vw]  bg-white p-10 rounded-lg ">
    <Header taskList={taskList}  />
    <Input taskList={taskList} setTaskList={setTaskList} />
    <Tasklist taskList={taskList} setTaskList={setTaskList}/>
    
  </div>
  </div> 
  );
};

export default App;




