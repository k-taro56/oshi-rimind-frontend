import { useRef } from "react";
import React, { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

function App() {
  const {
    todoList,
    AddtTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handAddTodoListItem = () => {
    if (inputEl.current?.value === "") return;
    if (inputEl.current?.value) {
      AddtTodoListItem(inputEl.current?.value);
      inputEl.current.value = "";
    }
  };

  console.log("TODOリスト:", todoList);
  const inCompleterdList = todoList.filter((todo) => {
    return !todo.done;
  });
  console.log("未完了リスト:", inCompleterdList);

  const CompleterdList = todoList.filter((todo) => {
    return todo.done;
  });
  console.log("完了リスト:", CompleterdList);
  return (
    <>
      <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
        <TodoTitle
          title="Todo進捗管理"
          as="h1"
          fontsize={{ base: "2xl", md: "3xl" }}
        />
        <TodoAdd
          inputEl={inputEl}
          handleAddTodoListItem={handAddTodoListItem}
          placeholder="ADD TODO"
          buttonText="TODOを追加"
          leftIcon={<AddIcon />}
        />
        <TodoList
          todoList={inCompleterdList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="未完了リスト"
          as="h2"
          fontsize={{ base: "xl", md: "2xl" }}
        />
        <TodoList
          todoList={CompleterdList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="完了リスト"
          as="h2"
          fontsize={{ base: "xl", md: "2xl" }}
        />
      </Container>
    </>
  );
}

export default App;
