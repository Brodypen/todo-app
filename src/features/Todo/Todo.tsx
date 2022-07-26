import React from 'react'
type todo = {
    id: string,
    task: string,
    "desc": string,
    "proj": number
    "date": string,
    "complete": boolean,
    "important": boolean,
}
interface TodoProps{
    todo: todo;
}

export const Todo = ({todo, ...props}: TodoProps) => {
  return (
    <div>{todo.task}</div>
  )
}
