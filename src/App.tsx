import * as React from "react";
import { ChakraProvider, Box, theme, Flex } from "@chakra-ui/react";
import { DrawerButton } from "./features/Drawer/DrawerButton";
import data from "./data/data.json";

export const App = () => {
  const [todoList, setToDoList] = React.useState(data);
  const [todoProjects, setTodoProjects] = React.useState<string[]>(["Default"]);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" padding={3}>
        <Flex h="10vh" justify="flex-start">
          <DrawerButton Projects={todoProjects} />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
