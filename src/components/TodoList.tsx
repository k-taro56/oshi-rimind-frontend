import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";
import { List } from "@chakra-ui/react";
import React from "react";

interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
  fontsize,
}: {
  todoList: Todo[]; // Todo型の配列または適切な型を指定
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as?: React.ElementType;
  fontsize?: string | Record<string, string>;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontsize={fontsize} mt="12" />
          <List w="full">
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};
