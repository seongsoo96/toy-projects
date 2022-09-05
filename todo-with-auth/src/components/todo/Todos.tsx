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
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import ITodo from '../../store/types/Todo';

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todosState);

  React.useEffect(() => {
    async function loadTodos() {
      const q = query(collection(firestore, 'todos'), orderBy('date'));
      const querySnapshot = await getDocs(q);
      const todosInFirestore = querySnapshot.docs.map((doc) => {
        return {
          id: doc.data().id,
          todo: doc.data().todo,
          date: doc.data().date.toDate(),
        };
      });
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
            <TableCell align="center">CreatedAt</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Delete</TableCell>
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
