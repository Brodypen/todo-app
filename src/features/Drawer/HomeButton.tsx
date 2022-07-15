import { Button } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface HomeButtonProps {
    text: string;
    setHomeShowCase?: MouseEventHandler;
    icon: JSX.Element;
}

export const HomeButton = ({setHomeShowCase, text, icon, ...props}:HomeButtonProps) => {
     return (
    <Button
      size="md"
      fontSize="xl"
      variant="ghost"
      color="current"
      justifyContent="flex-start"
      onClick={setHomeShowCase}
      leftIcon={icon}

    >{`${text}`}</Button>

  )
};