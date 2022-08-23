import * as React from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  Heading,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { DrawerButton } from "./features/Drawer/DrawerButton";
import { Todos } from "./features/Todo/Todos";

export const App = () => {
  const [todoProjects, setTodoProjects] = React.useState<string[]>([
    "Todo List",
  ]);

  const [selectProject, setSelectProject] = React.useState(0);
  const [filter, setFilter] = React.useState("All");
  // State functions
  const switchProjects = (project: string) => {
    for (let i = 0; i < todoProjects.length; i++) {
      if (todoProjects[i] === project) {
        setSelectProject(i);
        break;
      }
    }
  };

  const addNewProject = (projName: string) => {
    if (todoProjects.length >= 5) {
    } else {
      const newProjects = [...todoProjects, projName];
      setTodoProjects(newProjects);
    }
  };
  const filterProject = (filterOption: string) => {
    alert(filterOption);
    setFilter(filterOption);
  }

  return (
    <ChakraProvider theme={theme}>
      <VStack p={5} spacing={3}>
        <Flex h="5vh" alignSelf="flex-start">
          <DrawerButton
            Projects={todoProjects}
            addNewProjects={addNewProject}
            selectProjectOnClick={switchProjects}
            sortTaskOptions={filterProject}
          />
        </Flex>{" "}
        <Heading>{todoProjects[selectProject]}</Heading>
        <Spacer />
        <Todos project={selectProject}></Todos>
      </VStack>
    </ChakraProvider>
  );
};
