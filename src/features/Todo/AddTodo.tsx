import { Button, HStack, Input } from '@chakra-ui/react';
import React from 'react'

export const AddTodo = () => {
    const handleSubmit =( e: React.FormEvent<HTMLFormElement>) => {

    }
  return (
    <form onSubmit={handleSubmit}>
        <HStack>
            <Input focusBorderColor='white' variant="filled"/>
                  <Button type="submit">Add Task</Button>
        </HStack>
    </form>
  );
}