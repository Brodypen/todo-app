import { Stack } from "@chakra-ui/react";
import React from "react";
import { Todo } from "./Todo";
import data from "../../data/data.json";

export const Todos = () => {
  const [todoList, setToDoList] = React.useState(data);

  // Todos Functions
  const toggleComplete = (id: number) => {
    const newTodos = [...todoList];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.complete = !todo?.complete;
    }
    setToDoList(newTodos);
  };
  return (
    <Stack justifyContent="center" align="center">
      {todoList.map(
        (todo: {
          id: number;
          task: string;
          desc: string;
          proj: number;
          date: string;
          complete: boolean;
          important: boolean;
        }) => (
          <Todo todo={todo} key={todo.id} onClick={toggleComplete}></Todo>
        )
      )}
    </Stack>
  );
};
