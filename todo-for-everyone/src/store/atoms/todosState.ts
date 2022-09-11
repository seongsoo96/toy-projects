import { atom } from 'recoil';
import Todo from 'store/types/Todo';

export const todosState = atom<Todo[]>({
  key: 'todos-state',
  default: [] as Todo[],
});
