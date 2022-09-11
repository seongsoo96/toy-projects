import { Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Container sx={{ display: 'flex', textAlign: 'center' }}>
      <Typography
        sx={{
          flexGrow: 1,
          display: { xs: 'block', sm: 'block' },
        }}>
        {'Copyright © '}
        seongsoo96 {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
