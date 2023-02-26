import { Todo } from '$/services/todo';
import { TodoObject } from '$/types';
import { useState } from 'react';
import { useLogicProps } from './types';

export function useLogic({ data }: useLogicProps) {
  const [description, setDescription] = useState<TodoObject['description']>('');
  const [todos, setTodos] = useState<TodoObject[]>(data);

  const onCreateTodo = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const { data, error } = await Todo.create(description);

    if (error) {
      throw error;
    }

    if (data) {
      setTodos((prevTodo) => [...prevTodo, ...data]);
      setDescription('');
    }
  };

  const onToggleCompleteTodo = (todoItem: TodoObject) => async () => {
    const { data, error } = await Todo.update({ ...todoItem, isComplete: !todoItem.isComplete });

    if (error) {
      throw error;
    }

    if (data) {
      const [updatedTodo] = data;
      setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === todoItem.id ? updatedTodo : todo)));
    }
  };
  const onRemoveTodo = (todoItemId: TodoObject['id']) => async () => {
    const { error } = await Todo.delete(todoItemId);

    if (error) {
      throw error;
    }

    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoItemId));
  };

  return {
    description,
    setDescription,
    todos,
    onCreateTodo,
    onToggleCompleteTodo,
    onRemoveTodo,
  };
}
