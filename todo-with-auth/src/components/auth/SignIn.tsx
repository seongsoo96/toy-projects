import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface FormData {
  email: string;
  password: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

export default function SignIn() {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 10 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Sign In
        </Typography>
        <TextField
          id="email"
          label="email"
          variant="standard"
          placeholder="이메일 입력"
          fullWidth
          {...register('email')}
        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          type="password"
          placeholder="비밀번호 입력"
          fullWidth
          {...register('password')}
        />
        <Button type="submit" variant="contained">
          SignIn
        </Button>
      </Box>
    </Container>
  );
}
