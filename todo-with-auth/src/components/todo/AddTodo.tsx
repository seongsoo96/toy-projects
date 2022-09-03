import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { firebaseApp, firestore } from '../../config/firebaseConfig';
import Todo from '../../store/types/Todo';
import { useNavigate } from 'react-router';

const AddTodo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState({
    todo: '',
    date: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos({
      ...todos,
      todo: e.target.value,
      date: new Date(),
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newTodo: Todo = {
        todo: todos.todo,
        date: todos.date,
      };

      // Add a new document with a generated id
      const newTodoRef = doc(collection(firestore, 'todos'));

      // later...
      await setDoc(newTodoRef, newTodo);
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
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
