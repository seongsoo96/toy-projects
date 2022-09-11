import { Box, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export default function Loading() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <CircularProgress />
    </div>
  );
}
