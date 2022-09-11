import { atom } from 'recoil';
import Auth from 'store/types/Auth';

export const authState = atom<Auth>({
  key: 'auth-state',
  default: {} as Auth,
});
