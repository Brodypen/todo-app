import { Button, Divider, Stack, StackDivider, VStack } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent} from "react";
import { Todo } from "./Todo";
import data from "../../data/data.json";
import { AddTodo } from "./AddTodo";

interface TodoProps {
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
  const [valid, setValid] = React.useState<boolean>(true);
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
  const handleAddTodos = (todo: TodoProps) => {
     const newTodos = [...todoList];
    const CheckTodos = newTodos.find((Ntodo) => Ntodo.task === todo.task);
    if(!CheckTodos){
    const updatedTodos = [...todoList, todo];
    setToDoList(updatedTodos);
    setValid(true);
    } else {
      setValid(false);
    }
  }

  const handleSubmitTodo = (task: string) => {
    const todo = {
       task: task,
  desc: "Add Description",
  proj: 1,
  date: "Add Date",
  complete: false,
  important: false,
    }
    task && handleAddTodos(todo)
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      p="4"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todoList.map((todo: TodoProps, index) => (
        <Todo
          todo={todo}
          key={`${todo.task}-${index}`}
          handleDeleteTodo={handleDeleteTodo}
          handleChangeTodo={handleChangeTodo}
        ></Todo>
      ))}
      <AddTodo handleSubmitTodo={handleSubmitTodo} isValid={valid} />
    </VStack>
  );
};
