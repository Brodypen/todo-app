import React, { useId } from "react";
import { Todo } from "./Todo";
interface TodosProps {
  todos: any;
}

export const Todos = ({ todos, ...props }: TodosProps) => {
  return (     
    <div>
      {todos.map(
        (
          todo: {
            id: string;
            task: string;
            desc: string;
            proj: number;
            date: string;
            complete: boolean;
            important: boolean;
          }
        ) => (
          <Todo todo={todo} key={todo.id}></Todo>
        )
      )}
    </div>
  );
};
