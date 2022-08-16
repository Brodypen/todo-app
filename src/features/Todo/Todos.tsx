import { Stack } from "@chakra-ui/react";
import React from "react";
import { Todo } from "./Todo";
import data from "../../data/data.json";

type Todo = {
  id: number
  task: string
  desc: string
  proj: number
  date: string
  complete: boolean
  important: boolean
}
export const Todos = () => {
  const [todoList, setToDoList] = React.useState<Todo[]>(data);

  // Todos Functions
  const toggleComplete = (task: string) => {
    const newTodos = [...todoList];
    const todo = newTodos.find((todo) => todo.task === task);
    if (todo) {
      todo.complete = !todo?.complete;
    }
    setToDoList(newTodos);
  };
  const handleDeleteTodo = (task: string) => {
    const updatedTodos = todoList.filter((todo) => todo.task !== task);
    setToDoList(updatedTodos);
  }

  return (
    <Stack justifyContent="center" align="center">
      {todoList.map(
        (todo: Todo) => (
          <Todo todo={todo} key={todo.id} onClick={toggleComplete} handleDeleteTodo={handleDeleteTodo}></Todo>
        )
      )}
    </Stack>
  );
};
