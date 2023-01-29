import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import TodoEditDialog from './TodoEditDialog';

export default function TodoItem({ todo, todoDelete, editTodo }) {

  const [ OpenDialog, setOpenDialog ] = React.useState(false); 

  const DialogHandle = () => {
    setOpenDialog(!OpenDialog);; 
  }

  return (
    <>
      <TodoEditDialog editTodo={editTodo} open={OpenDialog} DialogHandle={DialogHandle} todo={todo} />
      <Paper style={{ padding: "0.5em 0em" }} >
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => todoDelete(todo.id) }>
                  <DeleteIcon />
                </IconButton>
              }
              disablePaddings
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox edge="start" tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
              </ListItemButton>
            </ListItem>
        </Paper>
      </>
  );
}