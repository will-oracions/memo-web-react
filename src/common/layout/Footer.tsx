import { Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex position="fixed" bottom={0} justifyContent="center" w="full" py={4}>
      <Text>CopyRight &copy; 2023</Text>
      <Text textDecoration="underline" ml={2}>
        <Link>
          <RouterLink target="_blank" to="/admin/manage">
            Manage
          </RouterLink>
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
