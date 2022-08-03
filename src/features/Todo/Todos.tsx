import { Stack } from "@chakra-ui/react";
import React from "react";
import { Todo } from "./Todo";
type todo = {
    id: number,
    task: string,
    desc: string,
    proj: number
    date: string,
    complete: boolean,
    important: boolean,
}
interface TodosProps {
  todos: todo[];
  onClick: Function;
}

export const Todos = ({ todos, onClick, ...props }: TodosProps) => {
  return (     
    <Stack justifyContent="center" align="center">
      {todos.map(
        (
          todo: {
            id: number;
            task: string;
            desc: string;
            proj: number;
            date: string;
            complete: boolean;
            important: boolean;
          }
        ) => (
          <Todo todo={todo} key={todo.id} onClick={onClick}></Todo>
        )
      )}
    </Stack>
  );
};
