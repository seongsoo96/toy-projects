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

export default function Todos() {
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
          <Todo />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
