import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Todo from './Todo';
import { useRecoilState } from 'recoil';
import todosState from '../../store/atoms/todosState';
import { firebaseApp, firestore } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import ITodo from '../../store/types/Todo';

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todosState);

  React.useEffect(() => {
    async function loadTodos() {
      const querySnapshot = await getDocs(collection(firestore, 'todos'));
      const todosInFirestore = querySnapshot.docs.map(
        (doc) => doc.data() as ITodo
      );
      console.log(todosInFirestore);
      setTodos(todosInFirestore);
    }
    loadTodos();
  }, [setTodos]);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 'sm', mx: 'auto', my: 3 }}>
      <Table sx={{ minWidth: 'sm' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Todos</TableCell>
            <TableCell align="right">CreatedAt</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <Todo key={todo.todo} {...todo} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
