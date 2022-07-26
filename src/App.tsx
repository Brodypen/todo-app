import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,

} from "@chakra-ui/react";
import { DrawerButton } from "./features/Drawer/DrawerButton";
import {Todos } from "./features/Todo/Todos"
import data from "./data/data.json";

export const App = () => {
  const [todoList, setToDoList] = React.useState(data);
  const [todoProjects, setTodoProjects] = React.useState<string[]>([
    "Todo List",
  ]);

  const [selectProject, setSelectProject] = React.useState(0);
  const switchProjects = (project: string) => {
    console.log("HEYO SWITCH!")
    for (let i = 0; i < todoProjects.length; i++) {
      if (todoProjects[i] === project) {
        setSelectProject(i);
        break;
      }
    }
  };
  const changeProjectName = (newName: string, index: number) => {
    console.log("HEY!");
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
      <Box textAlign="center" fontSize="xl" padding={3}>
        <Flex h="5vh" justify="space-between" align="center">
          <DrawerButton
            Projects={todoProjects}
            ProjectsOnClick={addNewProject}
            selectProjectOnClick={switchProjects}
            changeProjectName={changeProjectName}
          />
        </Flex>{" "}
        <Heading>{todoProjects[selectProject]}</Heading>
        <Todos todos={todoList}></Todos>
      </Box>
    </ChakraProvider>
  );
};
