import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import UnCheck from '@mui/icons-material/CheckBoxOutlineBlank';
import Delete from '@mui/icons-material/DeleteForever';

export default function Todo() {
  return (
    <>
      <TableRow
        // key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          todo
        </TableCell>
        <TableCell align="right">time</TableCell>
        <TableCell align="right">
          <UnCheck />
        </TableCell>
        <TableCell align="right">
          <Delete />
        </TableCell>
      </TableRow>
    </>
  );
}
