import { collection, doc, setDoc } from 'firebase/firestore';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { firestore } from 'config/firebaseConfig';
import Todo from 'store/types/Todo';
import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, todosState } from 'store/atoms';

const AddTodo = () => {
  const navigate = useNavigate();
  const setTodosState = useSetRecoilState(todosState);
  const loginState = useRecoilValue(authState);
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
      const uid = loginState.uid;
      const newTodoRef = doc(collection(firestore, uid));
      const newTodo: Todo = {
        id: newTodoRef.id,
        todo: todo.todo,
        date: todo.date,
        checked: todo.checked,
      };
      await setDoc(newTodoRef, newTodo);
      setTodosState((todos) => [...todos, newTodo]);
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          mt: 4,
        }}
        onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ fontSize: { xs: '1rem' } }}>
          Welcome{' '}
          <span style={{ color: '#1976d2' }}>{loginState.displayName}</span>
        </Typography>
        <Typography variant="h5" sx={{ mb: 1, fontSixe: { xs: '1.5rem' } }}>
          Add Todo
        </Typography>
        <TextField
          hiddenLabel
          id="todo"
          value={todo.todo}
          placeholder="write your todo"
          onChange={handleChange}
          variant="filled"
          size="small"
        />

        <Button size="small" type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodo;
