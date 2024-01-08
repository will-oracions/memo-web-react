"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavbarLinks } from "./NavbarLinks";
import HeaderMenu from "./HeaderMenu";
import { Link, Link as RouterLInk } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  const { children, href } = props;
  return (
    <Box
      as="div"
      // px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}>
      <RouterLInk to={href}>{children}</RouterLInk>
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* bg={useColorModeValue("gray.100", "gray.900")} */}
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">📚 Memo</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {NavbarLinks.map((link) => (
                <NavLink key={link.url} href={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <HeaderMenu />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavbarLinks.map((link) => (
                <NavLink key={link.url} href={link.url}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
