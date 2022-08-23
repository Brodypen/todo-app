import React, { FC } from "react";
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
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher";
import { HomeButton, ProjectButton } from "./HomeButton";
import { AddButton } from "./AddProjButton";
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
  addNewProjects: Function;
  selectProjectOnClick: Function;
  sortTaskOptions: Function;
}
export const DrawerButton:FC<DrawerButtonProps> = ({
  Projects,
  addNewProjects,
  selectProjectOnClick,
  sortTaskOptions,
  ...props
}) => {
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

              <HomeButton
                text="All"
                icon={<FaCalendar />}
                setHomeShowCase={sortTaskOptions}
              ></HomeButton>
              <HomeButton
                text="Today"
                icon={<FaCalendarDay />}
                setHomeShowCase={sortTaskOptions}
              ></HomeButton>
              <HomeButton
                text="Week"
                icon={<FaCalendarWeek />}
                setHomeShowCase={sortTaskOptions}
              ></HomeButton>
              <HomeButton
                text="Important"
                icon={<FaStar />}
                setHomeShowCase={sortTaskOptions}
              ></HomeButton>

              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Projects
              </DrawerHeader>
              {Projects.map((project, index) => (
                <ProjectButton
                  key={index}
                  text={project}
                  icon={<FaBars />}
                  setProject={selectProjectOnClick}
                  index={index}
                ></ProjectButton>
              ))}
              {Projects.length < 5 && (
                <AddButton
                  text="Create new project"
                  icon={<FaPlus />}
                  handleAddButton={addNewProjects}
                ></AddButton>
              )}
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Options
              </DrawerHeader>

              <ColorModeSwitcher />
              <Link href="https://github.com/BrodyPen" isExternal>
                <Button
                  size="md"
                  fontSize="xl"
                  variant="ghost"
                  color="current"
                  justifyContent="flex-start"
                  leftIcon={<FaGithub />}
                >Github</Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
