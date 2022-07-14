import React from 'react';
import {
  Text,
  Link,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const InfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Information</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader>Info about project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="md">
              Howdy! This is a project made following the{' '}
              <Link
                href="https://www.theodinproject.com/"
                isExternal
                color="teal.500"
              >
                Odin Project{<br></br>}
              </Link>
              This will be my first React and Chakra UI project{<br></br>}Thank
              you for playing!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link href="https://github.com/FrostandIce" isExternal>
              <Button colorScheme="gray" leftIcon={<FaGithub />}>
                GitHub
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoModal;