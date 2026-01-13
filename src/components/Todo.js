// src/components/Todo.js
import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className="Todo">
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}