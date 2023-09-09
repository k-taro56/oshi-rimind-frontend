import { useState, useEffect } from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";

interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    todoData.getAllTodoData().then((todo) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } as Todo;

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo,
      );
      setTodoList(newTodoList);
    });
  };
  const AddtTodoListItem = (todoContent: string) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false,
    };
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };
  const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId,
      );
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    AddtTodoListItem,
    deleteTodoListItem,
  };
};
