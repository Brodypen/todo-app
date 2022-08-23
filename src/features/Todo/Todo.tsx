import {
  Button,
  Editable,
  HStack,
  Spacer,
  Text,
  VStack,
  IconButton,
  EditableInput,
  EditablePreview,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

type todo = {
  task: string;
  desc: string;
  proj: number;
  date: string;
  complete: boolean;
  important: boolean;
};
interface changeProps {
  complete: boolean;
  important: boolean;
}
interface TodoProps {
  todo: todo;
  handleDeleteTodo: (task: string) => void;
  handleChangeTodo: (task: string, operation: keyof changeProps) => void;
}

export const Todo = ({
  todo,
  handleDeleteTodo,
  handleChangeTodo,
  ...props
}: TodoProps) => {
  return (
    <HStack>
      <VStack alignItems="stretch" spacing={0}>
        <Text
          fontSize="xl"
          onClick={() => handleChangeTodo(todo.task, "complete")}
          color={todo.important ? "yellow.400" : "none"}
        >
          {todo.complete ? (
            <Text as="s" noOfLines={1}>
              {todo.task}
            </Text>
          ) : (
            <Text noOfLines={1}>{todo.task}</Text>
          )}
        </Text>
        <Editable as="i" fontSize="sm" defaultValue={todo.desc}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </VStack>
      <Spacer />
      <Editable defaultValue={todo.date}>
        <EditablePreview />
        <Input as={EditableInput} type="date" />
      </Editable>
      <IconButton
        variant="ghost"
        aria-label="Important"
        icon={todo.important ? <FaStar /> : <FaRegStar />}
        onClick={() => handleChangeTodo(todo.task, "important")}
      ></IconButton>
      <Button
        variant="ghost"
        textColor="red.400"
        onClick={() => handleDeleteTodo(todo.task)}
      >
        X
      </Button>
    </HStack>
  );
};
