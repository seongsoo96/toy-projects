import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import UnCheck from '@mui/icons-material/CheckBoxOutlineBlank';
import Checked from '@mui/icons-material/CheckBox';
import Delete from '@mui/icons-material/DeleteForever';
import ITodo from 'store/types/Todo';
import { format } from 'date-fns';
import { useRecoilState, useRecoilValue } from 'recoil';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'config/firebaseConfig';
import { authState, todosState } from 'store/atoms';

const Todo: React.FC<ITodo> = ({ id, todo, date, checked }) => {
  const [recoilTodos, setRecoilTodos] = useRecoilState(todosState);
  const loginState = useRecoilValue(authState);
  const uid = loginState.uid;

  const handleCheckboxClick = async () => {
    try {
      const checkedRef = doc(firestore, uid, id);
      await updateDoc(checkedRef, {
        checked: !checked,
      });
      const updatedTodo = {
        id: id,
        todo: todo,
        date: date,
        checked: !checked,
      };
      const idx = recoilTodos.findIndex((todo) => todo.id === id);
      const newRecoilTodos = recoilTodos.filter((a) => a);
      newRecoilTodos.splice(idx, 1, updatedTodo);
      setRecoilTodos(() => [...newRecoilTodos]);
    } catch (error) {
      alert(`update failed: ${error}`);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteDoc(doc(firestore, uid, id));
      setRecoilTodos((todo) => todo.filter((todo) => todo.id !== id));
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
        <TableCell onClick={handleCheckboxClick} align="center">
          <IconButton>{checked ? <Checked /> : <UnCheck />}</IconButton>
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
