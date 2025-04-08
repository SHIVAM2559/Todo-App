// import { useState, useEffect } from 'react';
// import './App.css';
// import { TodoProvider } from './contexts';
// import { TodoForm, TodoItem } from './components';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   // Add Todo
//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   // Update Todo
//   const updateTodo = (id, updatedTodo) => {
//     setTodos((prev) =>
//       prev.map((todo) => (todo.id === id ? updatedTodo : todo))
//     );
//   };

//   // Delete Todo
//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   // Toggle Completed
//   const toggleComplete = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   // Load Todos from localStorage (safe with try/catch)
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("todos");
//       if (stored) {
//         const parsed = JSON.parse(stored);
//         if (Array.isArray(parsed)) {
//           setTodos(parsed);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to parse todos from localStorage:", err);
//       localStorage.removeItem("todos");
//     }
//   }, []);

//   // Save Todos to localStorage
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider value={{todos , addTodo,updateTodo,deleteTodo,toggleComplete}}>
//      <TodoForm/>
//      {
//       todos.map((todo)=> (
//         <div key={todo.id}>
//           <TodoItem todo={todo} />
//         </div>
//       ))
//      }
//     </TodoProvider>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from "./contexts"
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo} , ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App