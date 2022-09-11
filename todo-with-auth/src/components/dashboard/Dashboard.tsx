import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { authState } from 'store/atoms';
import AddTodo from 'components/todo/AddTodo';
import Todos from 'components/todo/Todos';

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
