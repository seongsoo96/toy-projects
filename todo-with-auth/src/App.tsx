import { Toolbar } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import Todos from './components/todo/Todos';
import authState from './store/atoms/authState';

function App() {
  const loginState = useRecoilValue(authState);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={loginState.isLogined ? <Dashboard /> : <SignIn />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
