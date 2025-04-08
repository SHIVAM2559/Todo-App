import React, { useState } from 'react'
import useTodo from '../contexts/TodoContext'

function TodoForm() {

    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({todo , completed:false})
        setTodo("")
    }

  return (
    <div>TodoForm</div>
  )
}

export default TodoForm