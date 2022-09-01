import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

export default function SighUp() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 10 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Sigh Up
        </Typography>
        <TextField
          id="email"
          label="email"
          variant="standard"
          placeholder="이메일 입력"
          fullWidth
          {...register('email', {
            required: '필수 입력값입니다.',
            validate: (email) =>
              (email.includes('@') && email.includes('.')) ||
              '이메일 형식을 지켜주세요.',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          type="password"
          placeholder="비밀번호 입력"
          fullWidth
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
        />
        <TextField
          id="passwordCheck"
          label="passwordCheck"
          variant="standard"
          type="password"
          placeholder="비밀번호 확인"
          fullWidth
          {...register('passwordCheck', {
            required: true,
            validate: (passwordCheck) =>
              passwordCheck === watch('password') ||
              '비밀번호가 일치하지 않습니다.',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="passwordCheck"
          render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
        />
        <Button type="submit" variant="contained">
          SignUp
        </Button>
      </Box>
    </Container>
  );
}
