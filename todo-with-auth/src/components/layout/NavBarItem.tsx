import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarItem({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Button component={Link} to={href} sx={{ color: '#fff' }}>
      {name}
    </Button>
  );
}
