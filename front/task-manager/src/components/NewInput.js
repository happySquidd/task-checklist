"use client";

import { useState } from "react";
import TaskList from "./TaskList";

export default function NewInput({onAddTask}) {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            onAddTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className="new-input">
            <div className="input-field">
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add new task here"></input>
            </div>
            <div className="submit-button">
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}