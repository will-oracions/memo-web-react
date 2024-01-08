import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const HeaderMenu = () => {
  // const { data } = useUser({ input: "f631f7d4-e1e0-459f-83fe-87276b47050f" });

  // console.log(data);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}>
        <Flex justifyContent="center" align="center">
          {/* <Text mr={2}>{data?.user.username}</Text> */}
          {/* <Avatar size={"sm"} src="/photo.jpeg" /> */}
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
