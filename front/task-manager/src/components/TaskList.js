"use client";

import NewInput from "./NewInput";

export default function TaskList({taskList}) {
    return (
        <div className="list">
            <ul>
                {taskList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}