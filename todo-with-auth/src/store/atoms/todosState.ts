import { atom } from 'recoil';
import Todo from '../types/Todo';

const todosState = atom<Todo[]>({
  key: 'todos-state',
  default: [] as Todo[],
});

export default todosState;
