import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';

export default function AddTodo() {
  const [todos, setTodos] = useState([]);

  return (
    <Container maxWidth="sm">
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 10 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Add Todo
        </Typography>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
        />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </Container>
  );
}
