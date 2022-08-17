import { Button, Divider, Stack, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Todo } from "./Todo";
import data from "../../data/data.json";
import { AddTodo } from "./AddTodo";

interface TodoProps {
  id: number;
  task: string;
  desc: string;
  proj: number;
  date: string;
  complete: boolean;
  important: boolean;
};
interface ChangeProps {
  complete: boolean;
  important: boolean;
}
export const Todos = () => {
  const [todoList, setToDoList] = React.useState<TodoProps[]>(data);

  // Todos Functions
  const handleDeleteTodo = (task: string) => {
    const updatedTodos = todoList.filter((todo) => todo.task !== task);
    setToDoList(updatedTodos);
  };
  const handleChangeTodo = (task: string, operation: keyof ChangeProps) => {
            const newTodos = [...todoList];
            const todo = newTodos.find((todo) => todo.task === task);
            if (todo) {
              todo[operation] = !todo[operation];
            }
            setToDoList(newTodos);
  }
  // Add new Todos

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      p="4"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todoList.map((todo: TodoProps) => (
        <Todo
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          handleChangeTodo={handleChangeTodo}
        ></Todo>
      ))}
      <AddTodo />
    </VStack>
  );
};
