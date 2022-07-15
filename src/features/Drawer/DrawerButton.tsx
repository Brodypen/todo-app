import React from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher";
import { HomeButton } from "./HomeButton";
import { FaCalendar, FaCalendarDay, FaCalendarWeek, FaStar } from "react-icons/fa";
const DrawerButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}></Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody textAlign="left">
            <Stack direction='column'>
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Home
              </DrawerHeader>

              <HomeButton
                text="All Tasks"
                icon={<FaCalendar></FaCalendar>}
              ></HomeButton>
              <HomeButton
                text="Today Tasks"
                icon={<FaCalendarDay></FaCalendarDay>}
              ></HomeButton>
              <HomeButton
                text="Week Tasks"
                icon={<FaCalendarWeek></FaCalendarWeek>}
              ></HomeButton>
              <HomeButton
                text="Important Tasks"
                icon={<FaStar></FaStar>}
              ></HomeButton>

              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Projects
              </DrawerHeader>
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Options
              </DrawerHeader>

              <ColorModeSwitcher />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerButton;
