import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import UnCheck from '@mui/icons-material/CheckBoxOutlineBlank';
import Delete from '@mui/icons-material/DeleteForever';
import ITodo from '../../store/types/Todo';
import { format } from 'date-fns';
import { useRecoilState } from 'recoil';
import todosState from '../../store/atoms/todosState';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { firestore } from '../../config/firebaseConfig';

const Todo: React.FC<ITodo> = ({ id, todo, date }) => {
  const [recoilTodos, setRecoilTodos] = useRecoilState(todosState);
  const handleDeleteClick = async () => {
    try {
      await deleteDoc(doc(firestore, 'todos', id));
      setRecoilTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
      alert(`delete failed: ${error}`);
    }
  };

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {todo}
        </TableCell>
        <TableCell align="center">{format(date, 'yyyy/MM/dd')}</TableCell>
        <TableCell align="center">
          <UnCheck />
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={handleDeleteClick} aria-label="delete">
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Todo;
