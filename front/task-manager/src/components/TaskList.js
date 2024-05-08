"use client";

import NewInput from "./NewInput";

export default function TaskList({ taskList , onRemoveItem}) {
  return (
    <div className="list">
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item.task} (Due date: {item.dueDate})   <button onClick={() => onRemoveItem(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
