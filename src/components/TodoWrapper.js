import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';

// This file only handles the LIST logic.
export const TodoWrapper = ({ searchTerm }) => {
    
    // Load tasks from Local Storage
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Filter logic: Check if searchTerm exists before filtering
    const searchSafe = searchTerm ? searchTerm.toLowerCase() : "";
    const filteredTodos = todos.filter(todo => 
        todo.task.toLowerCase().includes(searchSafe)
    );

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        
        {/* If no tasks match the search, show a message */}
        {filteredTodos.length === 0 && todos.length > 0 && (
            <p style={{color: 'white', opacity: 0.7}}>No tasks found matching "{searchTerm}"</p>
        )}

        {filteredTodos.map((todo, index) => (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
    </div>
  )
}