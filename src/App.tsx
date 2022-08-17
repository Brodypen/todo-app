import * as React from "react";
import { ChakraProvider, theme, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import { DrawerButton } from "./features/Drawer/DrawerButton";
import { Todos } from "./features/Todo/Todos";


export const App = () => {

  const [todoProjects, setTodoProjects] = React.useState<string[]>([
    "Todo List",
  ]);

  const [selectProject, setSelectProject] = React.useState(0);
  // State functions
  const switchProjects = (project: string) => {
    for (let i = 0; i < todoProjects.length; i++) {
      if (todoProjects[i] === project) {
        setSelectProject(i);
        break;
      }
    }
  };
  const changeProjectName = (newName: string, index: number) => {
    todoProjects.splice(index, 1, newName);
    setTodoProjects(todoProjects);
    switchProjects(newName);
  };

  const addNewProject = () => {
    if (todoProjects.length >= 5) {
    } else {
      const newProjects = [...todoProjects, "Click me to edit!"];
      setTodoProjects(newProjects);
    }
  };
  

  return (
    <ChakraProvider theme={theme}>
      <VStack p={5} spacing={3}>
        <Flex h="5vh" alignSelf='flex-start'>
          <DrawerButton
            Projects={todoProjects}
            ProjectsOnClick={addNewProject}
            selectProjectOnClick={switchProjects}
            changeProjectName={changeProjectName}
          />
        </Flex>{" "}

          <Heading>{todoProjects[selectProject]}</Heading>
          <Spacer/>

            <Todos></Todos>

      </VStack>
    </ChakraProvider>
  );
};
