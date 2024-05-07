"use client";

import { useState } from 'react'
import NewInput from "./NewInput";
import TaskList from "./TaskList";
import Header from "./Header";

export default function Home() {
  
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <NewInput onAddTask={handleAddTask} />
      <TaskList taskList={taskList} />
    </div>
  )
}