import React, { Children } from "react";
import {
  theme,
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/core";

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return <Flex flexDirection="column">
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="whiteAlpha.500"
      py={4}
      px={8}
    // color="blackAlpha.500"
    >
      <Stack
        isInline
        spacing={4}
        align="center"
        backgroundColor="whiteAlpha.500"
        color="gray.500"
        fontWeight="bold"
      >
        <Icon name="logo" color="black" />
        <Link color="blackAlpha.500" fontWeight="bold">
          Feedback
        </Link>
        <Link color="blackAlpha.500" fontWeight="bold">
          Sites
        </Link>
      </Stack>
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor="whiteAlpha.500"
      >
        <Link mr={4} color="blackAlpha.500" fontWeight="bold">
          Account{" "}
        </Link>
        <Avatar size="sm" src={auth.user.photoUrl} />
      </Flex>
    </Flex>

    <Flex backgroundColor="gray.100" p={8} height="100vh">
      <Flex
        maxWidth="800px"
        w="100%"
        // justifyContent="center"
        // alignItems="center"
        ml="auto"
        mr="auto"
        direction="column"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color="black" mb={4} >Sites</Heading>
        {children}
      </Flex>
    </Flex>
  </Flex>
};

export default DashboardShell;
