import { TodoObject } from '$/types';
import { useState, useReducer } from 'react';
import { MOCK_TODOS } from './mocks';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoObject[]>(MOCK_TODOS);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    setTodos((prevTodo) => [...prevTodo, { description: inputValue, isComplete: false }]);
    setInputValue('');
  };

  const removeItem = (todoItem: TodoObject) => {
    setTodos((prevTodo) => prevTodo.filter((t) => t !== todoItem));
  };

  const onToggleComplete = (todoItem: TodoObject) => {};

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <form className="flex mt-4" onSubmit={handleSubmit}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Add
            </button>
          </form>
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              description={todo.description}
              isComplete={todo.isComplete}
              onRemove={() => removeItem(todo)}
              toggleComplete={() => onToggleComplete(todo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
