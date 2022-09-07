import { atom } from 'recoil';
import Auth from '../types/Auth';

const authState = atom<Auth>({
  key: 'auth-state',
  default: {} as Auth,
});

export default authState;
