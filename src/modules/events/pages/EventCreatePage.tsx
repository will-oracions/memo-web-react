import { Box, Heading } from "@chakra-ui/react";
import EventCreateForm from "../forms/EventCreateForm";

const EventCreatePage = () => {
  return (
    <>
      <Box maxW={{ base: "full", md: "xl" }} mx="auto">
        <Heading as="h2" size="md" mb={4}>
          Créer une évènement
        </Heading>
        <EventCreateForm />
      </Box>
    </>
  );
};

export default EventCreatePage;
