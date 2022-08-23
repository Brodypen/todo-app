import { Button, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaTasks } from 'react-icons/fa';

interface HomeButtonProps {
    text: string;
    setHomeShowCase: Function;
    icon: JSX.Element;
}

interface ProjButtonProps {
    text: string;
    setProject: Function;
    icon: JSX.Element;
    index: number;
}

export const HomeButton = ({setHomeShowCase, text, icon, ...props}:HomeButtonProps) => {
     return (
    <Button
      size="md"
      fontSize="xl"
      variant="ghost"
      color="current"
      justifyContent="flex-start"
      onClick={() => setHomeShowCase(text)}
      leftIcon={icon}

    >{`${text} Tasks`}</Button>

  )
};
export const ProjectButton:FC<ProjButtonProps> = ({setProject, text, icon, index, ...props}) => {
  
     return (
    <Button
      size="md"
      fontSize="xl"
      variant="ghost"
      color="current"
      justifyContent="flex-start"
      onClick={() => setProject(text)}
      leftIcon={icon}

    >
      <Text>{text}</Text>
    </Button>

  )
};