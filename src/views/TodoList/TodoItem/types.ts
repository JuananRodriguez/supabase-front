import { TodoObject } from '$/types';

export type TodoItemProps = Pick<TodoObject, 'description' | 'isComplete'> & {
  onRemove: () => void;
  toggleComplete: () => void;
};
