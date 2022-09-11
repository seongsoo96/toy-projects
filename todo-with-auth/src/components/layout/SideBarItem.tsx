import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SideBarItem({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <>
      <ListItem component={Link} to={href} disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
