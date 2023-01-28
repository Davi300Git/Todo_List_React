import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
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


  return (
    <Container maxWidth="xs" style={{ marginTop: "1em"}}>
        <Form todoAdd={todoAdd} />
        <List sx={{ marginTop: "1em" }}>
            {todos.map((todo) => (
            <div key = {todo.id} style = {{ marginTop: "1em" }}>
                <TodoItem todo = {todo} todoDelete={todoDelete} />    
            </div>
            ))}
        </List>
    </Container>
  )
}
