import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import DrawerButton from "./features/Drawer/DrawerButton";
import InfoModal from "./components/InfoModal";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex h="80vh" justify="flex-end">
        <ColorModeSwitcher />
        <InfoModal />
      </Flex>
    </Box>
  </ChakraProvider>
);
