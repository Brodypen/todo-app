import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

type todo = {
  id: number;
  task: string;
  desc: string;
  proj: number;
  date: string;
  complete: boolean;
  important: boolean;
};
interface TodoProps {
  todo: todo;
  onClick: Function;
  handleDeleteTodo: (task: string) => void;
}

export const Todo = ({ todo, onClick, handleDeleteTodo, ...props }: TodoProps) => {
  function handleTodoClick() {
    onClick(todo.task);
  }
  return (
    <HStack>
      <Button variant="ghost" size="md" onClick={handleTodoClick}>
        {todo.complete ? <s>{todo.task}</s> : <div>{todo.task}</div>}
      </Button>
      <Spacer/>
      <Button marginLeft="2" variant="ghost" textColor="red.400" onClick={() => handleDeleteTodo(todo.task)}>X</Button>
    </HStack>
  );
};
