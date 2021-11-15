import { api } from '@/services/request';
import { BaseResponseType } from '@/types/request';
import { TodoType } from '@/types/todo';
import { FormEvent, useCallback, useEffect, useState } from 'react';

export default function useAppController() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    api.get('api/todo').then((response) => {
      setTodos(response.body);
    });
  }, []);

  async function submitAddTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!!todo.trim()) {
      const response: BaseResponseType = await api.post('api/todo', { todo });
      setTodos((prev) => [{ id: response.body.id, todo, done: false }, ...prev]);
      setTodo('');
    }
  }

  async function toggleDone(todo: TodoType) {
    await api.put('api/todo', { ...todo, done: !todo.done });
    setTodos((oldTasks) =>
      oldTasks.map((prevTask) => {
        if (prevTask.id === todo.id) {
          return { ...prevTask, done: !prevTask.done };
        }
        return prevTask;
      })
    );
  }

  async function removeTodo(todo: TodoType) {
    await api.del(`api/todo?id=${todo.id}`);
    setTodos((oldTasks) => oldTasks.filter((prevTask) => prevTask.id !== todo.id));
  }

  return {
    todos,
    todo,
    setTodo,
    submitAddTodo,
    toggleDone,
    removeTodo,
  };
}
