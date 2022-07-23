import { Button, ButtonGroup, Editable, EditableInput, EditablePreview, Input, Flex, IconButton, useEditableControls } from '@chakra-ui/react';
import React from 'react';

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
export const ProjectButton = ({setProject, changeProjectName, text, icon, index, ...props}:ProjButtonProps) => {
  
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