import { Container } from '@mui/material';
import React from 'react';

type MainProps = {
  children: React.ReactNode;
};
export default function Main(props: MainProps) {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', height: '86vh' }}>
      {props.children}
    </Container>
  );
}
