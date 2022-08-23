import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
interface AddTodoProps {
  handleSubmitTodo: Function;
  isValid: boolean;
}
export const AddTodo = ({ handleSubmitTodo, isValid }: AddTodoProps) => {
  const [task, setTask] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitTodo(task);
      }}
    >
      <HStack>
        <Input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          focusBorderColor={isValid? "white": "red.400"}
          variant="filled"
          placeholder="What to do...?"
          color={isValid ? "grey" : "red"}
        />
        <Button type="submit">Add Task</Button>
      </HStack>
    </form>
  );
};
