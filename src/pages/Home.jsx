import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

export default function Home() {

    const [ todos, setTodos] = useState([]);

    const todoAdd = (todo) => {
        console.log(todo)
        setTodos([...todos, todo]);
    }    
    
    const todoDelete = (id) => {
       var filtered = todos.filter((todo) => todo.id !== id);
       setTodos(filtered);
    }
    const editTodo = (id, editText) => {
        var todoArrys = [...todos];

        for(var i in todoArrys) {
            if(todoArrys[i].id === id){
                todoArrys[i].text = editText;
            }
        }

        setTodos(todoArrys);
    }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em"}}>
        <TodoForm todoAdd={todoAdd} />
        <List sx={{ marginTop: "1em" }}>
            {todos.map((todo) => (
            <div key = {todo.id} style = {{ marginTop: "1em" }}>
                <TodoItem editTodo = { editTodo } todo = {todo} todoDelete={todoDelete} />    
            </div>
            ))}
        </List>
    </Container>
  )
}
