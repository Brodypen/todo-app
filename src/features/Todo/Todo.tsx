import { Button } from '@chakra-ui/react';
import React from 'react'
type todo = {
    id: number,
    task: string,
    "desc": string,
    "proj": number
    "date": string,
    "complete": boolean,
    "important": boolean,
}
interface TodoProps{
    todo: todo;
    onClick: Function;
}

export const Todo = ({todo, onClick, ...props}: TodoProps) => {
  function handleTodoClick(){
    onClick(todo.id);
  }
  return (
    <Button variant='ghost' size='md' onClick={handleTodoClick}>{todo.complete ? <s>{todo.task}</s> : <div>{todo.task}</div>}</Button>
  )
}
