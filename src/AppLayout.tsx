import { Box } from "@chakra-ui/react";
import Header from "./common/layout/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Box maxW="8xl" fontSize="xl" mx="auto" px={{ base: 2, md: 8 }} pb={10}>
        <Box>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
