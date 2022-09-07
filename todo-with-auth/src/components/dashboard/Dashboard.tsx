import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import authState from '../../store/atoms/authState';
import AddTodo from '../todo/AddTodo';
import Todos from '../todo/Todos';

export default function Dashboard() {
  const loginState = useRecoilValue(authState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginState.isLogined) {
      navigate('/signin');
    }
  }, [loginState, navigate]);

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}
