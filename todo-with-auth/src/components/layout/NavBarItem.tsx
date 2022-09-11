import { Button } from '@mui/material';
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
