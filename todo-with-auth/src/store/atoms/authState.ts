import { atom } from 'recoil';

const authState = atom<boolean>({
  key: 'auth-state',
  default: false,
});

export default authState;
