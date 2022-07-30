import { Button, Editable, EditableInput, EditablePreview, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

interface HomeButtonProps {
    text: string;
    setHomeShowCase: Function;
    icon: JSX.Element;
}
interface ProjButtonProps {
    text: string;
    setProject: Function;
    changeProjectName: Function;
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

    >{`${text}`}</Button>

  )
};
export const ProjectButton:FC<ProjButtonProps> = ({setProject, changeProjectName, text, icon, index, ...props}) => {
  
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
      <Editable defaultValue={text} onSubmit={() => changeProjectName("hey", 1)}>
      <EditablePreview/>
      <Input as={EditableInput}/>
      </Editable>
    </Button>

  )
};