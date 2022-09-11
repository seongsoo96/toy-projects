import { Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    // <Container
    //   maxWidth="sm"
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     backgroundColor: '#1976d2',
    //     justifyContent: 'center',
    //     height: '5vh',
    //     width: '100vh',
    //     textAlign: 'center',
    //   }}>
    //   <Typography variant="body2" color="#fff">
    //     {'Copyright © '}
    //     seongsoo96 {new Date().getFullYear()}.
    //   </Typography>
    // </Container>
    <Container sx={{ display: 'flex', textAlign: 'center' }}>
      <Typography
        sx={{
          flexGrow: 1,
          display: { xs: 'block', sm: 'block' },
          textDecoration: 'none',
          boxShadow: 'none',
          // backgroundColor: '#1976d2',
          // color: '#fff',
        }}>
        {'Copyright © '}
        seongsoo96 {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
