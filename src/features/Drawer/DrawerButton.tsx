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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher";
import { HomeButton, ProjectButton } from "./HomeButton";
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
  ProjectsOnClick: Function;
  selectProjectOnClick: Function;
  changeProjectName: Function;
}
export const DrawerButton:FC<DrawerButtonProps> = ({
  Projects,
  ProjectsOnClick,
  selectProjectOnClick,
  changeProjectName,
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

              <HomeButton text="All Tasks" icon={<FaCalendar />}setHomeShowCase={ProjectsOnClick}></HomeButton>
              <HomeButton
                text="Today Tasks"
                icon={<FaCalendarDay />}
                setHomeShowCase={ProjectsOnClick}
              ></HomeButton>
              <HomeButton
                text="Week Tasks"
                icon={<FaCalendarWeek />}setHomeShowCase={ProjectsOnClick}
              ></HomeButton>
              <HomeButton text="Important Tasks" icon={<FaStar />}setHomeShowCase={ProjectsOnClick}></HomeButton>

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
                  changeProjectName={changeProjectName}
                ></ProjectButton>
              ))}
              {Projects.length < 5 &&
              <HomeButton
                text="Create new project"
                icon={<FaPlus />}
                setHomeShowCase={ProjectsOnClick}
              ></HomeButton>
}
              <DrawerHeader textAlign="left" borderBottomWidth="1px">
                Options
              </DrawerHeader>

              <ColorModeSwitcher />
              <Link href="https://github.com/BrodyPen" isExternal>
                <HomeButton text="GitHub" icon={<FaGithub />}setHomeShowCase={ProjectsOnClick}></HomeButton>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
