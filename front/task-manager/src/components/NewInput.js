"use client";

import { useState } from "react";
import TaskList from "./TaskList";

export default function NewInput({onAddTask}) {
    
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTaskNameChange = (e) => {
        setTask(e.target.value);
    }

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    }

    const handleAddItem = () => {
        if (task.trim() !== '' && dueDate !== '') {
            onAddTask({task: task, dueDate: dueDate});
            setTask('');
            setDueDate('');
        }
    }

    return (
        <div className="new-input">
            <div className="input-field">
                <input type="text" value={task} onChange={handleTaskNameChange} placeholder="Add new task here"></input>
                <input type="date" value={dueDate} onChange={handleDueDateChange} />
            </div>
            <div className="submit-button">
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}