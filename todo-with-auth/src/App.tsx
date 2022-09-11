import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import SignIn from 'components/auth/SignIn';
import SignUp from 'components/auth/SignUp';
import Dashboard from 'components/dashboard/Dashboard';
import Loading from 'components/layout/Loading';
import NavBar from 'components/layout/NavBar';
import { auth } from 'config/firebaseConfig';
import { authState } from 'store/atoms';

function App() {
  const [loginState, setLoginState] = useRecoilState(authState);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user
        ? setLoginState({
            uid: user.uid,
            isLogined: true,
            displayName: user.displayName ?? '',
          })
        : setLoginState({ uid: '', isLogined: false, displayName: '' });
    });
  }, [setLoginState]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              loginState.isLogined === undefined ? (
                <Loading />
              ) : loginState.isLogined ? (
                <Dashboard />
              ) : (
                <SignIn />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
