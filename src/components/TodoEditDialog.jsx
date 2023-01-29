import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TodoEditDialog({ open, DialogHandle, todo, editTodo }) {

  const [ editText, setEditText ] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editText);
    DialogHandle();
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={DialogHandle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Do you want to edit the task ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <p> By clicking on the text you can change the task!</p>
          </DialogContentText>
            <TextField defaultValue={editText} onChange={ (e) => {setEditText(e.target.value)}} fullWidth />
          <DialogContentText style={{ display: "flex", justifyContent: "center", paddingTop:"1em" }}>
            Just click OK!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={DialogHandle} >Cancel</Button>
          <Button onClick={textHandler} >OK</Button>
        </DialogActions>
      </Dialog>
  );
}