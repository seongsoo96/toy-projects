import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'config/firebaseConfig';
import { useSetRecoilState } from 'recoil';
import { authState } from 'store/atoms';
import { useNavigate } from 'react-router';

interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const setLoginState = useSetRecoilState(authState);
  const { register, setValue, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setLoginState({
          uid: user.uid,
          isLogined: true,
          displayName: user.displayName ?? '',
        });
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(`로그인에 실패하였습니다. 원인: ${errorCode}`);
        setValue('email', '');
        setValue('password', '');
        navigate('/signin');
      });
  };

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
