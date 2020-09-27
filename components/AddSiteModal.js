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
} from "@chakra-ui/core";

import {createSite} from '@/lib/db'

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const { handleSubmit, register} = useForm();
  const onCreateSite = (values) => createSite(values);

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
                  ref={initialRef}
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