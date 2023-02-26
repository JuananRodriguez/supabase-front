import { TodoItemProps } from './types';

export const TodoItem = ({ description, isComplete, onRemove, toggleComplete }: TodoItemProps) => {
  return (
    <div className="flex mb-4 items-center">
      <p className={`flex-1 ${isComplete && 'line-through'}`}>{description}</p>
      <button className="p-2 ml-4 mr-2 border-2 rounded" onClick={toggleComplete}>
        {isComplete ? 'Not Done' : 'Done'}
      </button>
      <button className="p-2 ml-2 border-2 rounded" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};
