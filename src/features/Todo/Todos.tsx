import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Todo } from "./Todo";
import data from "../../data/data.json";
import { AddTodo } from "./AddTodo";
interface TodosProps {
  project: string;
  filter: string;
}
interface TodoProps {
  task: string;
  desc: string;
  proj: string;
  date: string;
  complete: boolean;
  important: boolean;
}
interface ChangeProps {
  complete: boolean;
  important: boolean;
}
export const Todos = ({ project, filter, ...props }: TodosProps) => {
  const [todoList, setToDoList] = React.useState<TodoProps[]>(() => (JSON.parse(localStorage.getItem('todoList')!)) || data);

  const [valid, setValid] = React.useState<boolean>(true);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
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
  };

  // Add new Todos
  const handleAddTodos = (todo: TodoProps) => {
    const newTodos = [...todoList];
    const CheckTodos = newTodos.find(
      (Ntodo) => Ntodo.task === todo.task && Ntodo.proj === todo.proj
    );
    if (!CheckTodos) {
      const updatedTodos = [...todoList, todo];
      setToDoList(updatedTodos);
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmitTodo = (task: string) => {
    const todo = {
      task: task,
      desc: "Add Description",
      proj: project,
      date: "Add Date",
      complete: false,
      important: false,
    };
    task && handleAddTodos(todo);
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      p="4"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {filter === "Important"
        ? todoList
            .filter((todo) => todo.important === true)
            .map((todo: TodoProps) =>
              todo.proj === project ? (
                <Todo
                  todo={todo}
                  key={`${todo.task}`}
                  handleDeleteTodo={handleDeleteTodo}
                  handleChangeTodo={handleChangeTodo}
                ></Todo>
              ) : null
            )
        : filter === "Unfinished"
        ? todoList
            .filter((todo) => todo.complete === false)
            .map((todo: TodoProps) =>
              todo.proj === project ? (
                <Todo
                  todo={todo}
                  key={`${todo.task}`}
                  handleDeleteTodo={handleDeleteTodo}
                  handleChangeTodo={handleChangeTodo}
                ></Todo>
              ) : null
            )
        : todoList.map((todo: TodoProps) =>
            todo.proj === project ? (
              <Todo
                todo={todo}
                key={`${todo.task}`}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeTodo={handleChangeTodo}
              ></Todo>
            ) : null
          )}

      <AddTodo handleSubmitTodo={handleSubmitTodo} isValid={valid} />
    </VStack>
  );
};
