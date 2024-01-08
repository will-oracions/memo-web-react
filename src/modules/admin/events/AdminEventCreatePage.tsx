import { Box, Heading } from "@chakra-ui/react";
import EventCreateForm from "../../events/forms/EventCreateForm";

const AdminEventCreatePage = () => {
  return (
    <>
      <Box maxW={{ base: "full", md: "xl" }} mx="auto">
        <Heading as="h2" size="md" mb={4}>
          Créer un évènement
        </Heading>
        <EventCreateForm />
      </Box>
    </>
  );
};

export default AdminEventCreatePage;
