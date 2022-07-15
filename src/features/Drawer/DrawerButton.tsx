import React from "react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher";
import { HomeButton } from "./HomeButton";
import {
  FaCalendar,
  FaCalendarDay,
  FaCalendarWeek,
  FaStar,
  FaBars,
  FaGithub,
  FaPlus,
} from "react-icons/fa";

interface DrawerButtonProps {
  Projects: string[];
}
export const DrawerButton = ({ Projects, ...props }: DrawerButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Drawer"
        onClick={onOpen}
        icon={<FaBars />}
        size="lg"
      ></IconButton>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody textAlign="left">
            <Stack direction="column">
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Home
              </DrawerHeader>

              <HomeButton text="All Tasks" icon={<FaCalendar />}></HomeButton>
              <HomeButton
                text="Today Tasks"
                icon={<FaCalendarDay />}
              ></HomeButton>
              <HomeButton
                text="Week Tasks"
                icon={<FaCalendarWeek />}
              ></HomeButton>
              <HomeButton text="Important Tasks" icon={<FaStar />}></HomeButton>

              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Projects
              </DrawerHeader>
              {Projects.map((project) => (
                <HomeButton key={project} text={project} icon={<FaBars />}></HomeButton>
              ))}
              <HomeButton
                text="Create new project"
                icon={<FaPlus />}
              ></HomeButton>
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Options
              </DrawerHeader>

              <ColorModeSwitcher />
              <Link href="https://github.com/BrodyPen" isExternal>
                <HomeButton text="GitHub" icon={<FaGithub />}></HomeButton>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
