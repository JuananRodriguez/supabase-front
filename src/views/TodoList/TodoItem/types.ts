import { TodoObject } from '$/types';

export type TodoItemProps = TodoObject & {
  onRemove: () => void;
  toggleComplete: () => void;
};
