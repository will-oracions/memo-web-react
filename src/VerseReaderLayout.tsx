import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import VersesFilterForm from "./modules/home/forms/VersesFilterForm";

const VerseReaderLayout = () => {
  return (
    <Box mt={4} mb={8}>
      <Box mb={16}>
        <Heading fontSize="xl" mb={4}>
          Rechercher
        </Heading>
        <VersesFilterForm />
      </Box>
      <Outlet />
    </Box>
  );
};

export default VerseReaderLayout;
