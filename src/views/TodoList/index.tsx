import { TodoObject } from '$/types';
import { useLogic } from './logic';
import { TodoItem } from './TodoItem';

export const TodoList = ({ data }: { data: TodoObject[] }) => {
  const { description, setDescription, todos, onCreateTodo, onRemoveTodo, onToggleCompleteTodo } = useLogic({ data });

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <form className="flex mt-4" onSubmit={onCreateTodo}>
            <input
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Add
            </button>
          </form>
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              description={todo.description}
              isComplete={todo.isComplete}
              onRemove={onRemoveTodo(todo.id)}
              toggleComplete={onToggleCompleteTodo(todo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
