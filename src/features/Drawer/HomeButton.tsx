import { Button, HStack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import {FaTrash} from "react-icons/fa"
interface HomeButtonProps {
    text: string;
    setHomeShowCase: Function;
    icon: JSX.Element;
}

interface ProjButtonProps {
    text: string;
    setProject: Function;
    deleteProject: Function;
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
export const ProjectButton:FC<ProjButtonProps> = ({setProject, deleteProject, text, icon, index, ...props}) => {
  
     return (
        <HStack align="stretch">
         <Button
           size="md"
           fontSize="xl"
           variant="ghost"
           color="current"
           width="100%"
           justifyContent="flex-start"
           onClick={() => setProject(text)}
           leftIcon={icon}
         >
           <Text>{text}</Text>
         </Button>
         <Button
           size="md"
           fontSize="xl"
           variant="ghost"
           color="current"
           justifyContent="flex-start"
           onClick={() => deleteProject(text)}
           leftIcon={<FaTrash/>}
         ></Button>
    </HStack>
     );
};