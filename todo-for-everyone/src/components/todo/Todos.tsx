import * as React from 'react';
import Todo from './Todo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState, todosState } from 'store/atoms';
import { firestore } from 'config/firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todosState);
  const loginState = useRecoilValue(authState);

  React.useEffect(() => {
    const uid = loginState.uid;

    async function loadTodos() {
      const q = query(collection(firestore, uid), orderBy('date'));
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        const todosInFirestore = querySnapshot.docs.map((doc) => {
          return {
            id: doc.data().id,
            todo: doc.data().todo,
            date: doc.data().date.toDate(),
            checked: doc.data().checked,
          };
        });
        setTodos(todosInFirestore);
      }
    }
    loadTodos();
  }, [loginState, setTodos]);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 'sm', mx: 'auto', my: 3 }}>
      <Table sx={{ minWidth: 'sm' }} aria-label="simple table">
        <TableHead
          sx={{
            position: 'sticky',
            top: '0',
            backgroundColor: '#fff',
            zIndex: '1',
          }}>
          <TableRow>
            <TableCell>Todos</TableCell>
            <TableCell
              align="center"
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
              CreatedAt
            </TableCell>
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
