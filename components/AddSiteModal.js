import { useRef } from 'react';
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/core";

import {createSite} from '@/lib/db'

const AddSiteModal = () => {
  const initialRef = useRef();
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({site, url}) => {
    createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    });
    toast({
      title: "Success",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button fontWeight="medium" maxW="200px" onClick={onOpen}>
        Add your first Site
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl>
              <FormLabel>Name</FormLabel>
                <Input
                placeholder="My Site"
                name="site"
                ref={register({
                  required: 'Required'
                })}
                />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
                <Input
                  placeholder="https://website.com"
                  name="url"
                  ref={register({
                    required:'Required'
                  })}
                />
            </FormControl>
          </ModalBody>

          <ModalFooter>
              <Button onClick={onClose} mr={3} fontWeight="medium">
                Cancel
                </Button>
              <Button
                type="submit"
                fontWeight="medium"
                variantColor="teal">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
 export default AddSiteModal;