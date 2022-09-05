import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { firebaseApp, firestore } from '../../config/firebaseConfig';
import Todo from '../../store/types/Todo';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import todosState from '../../store/atoms/todosState';

const AddTodo = () => {
  const navigate = useNavigate();
  const setTodosState = useSetRecoilState(todosState);
  const [todo, setTodo] = useState({
    id: '',
    todo: '',
    date: new Date(),
    checked: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      id: '',
      todo: e.target.value,
      date: new Date(),
      checked: false,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newTodoRef = doc(collection(firestore, 'todos'));
      const newTodo: Todo = {
        id: newTodoRef.id,
        todo: todo.todo,
        date: todo.date,
        checked: todo.checked,
      };
      await setDoc(newTodoRef, newTodo);
      setTodosState((todos) => [...todos, todo]);
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
    setTodo({ id: '', todo: '', date: new Date(), checked: false });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 10 }}
        onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Add Todo
        </Typography>
        <TextField
          hiddenLabel
          id="todo"
          value={todo.todo}
          placeholder="write your todo"
          onChange={handleChange}
          variant="filled"
        />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodo;
