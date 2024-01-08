import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CustomAlert } from "../../../common/CustomForms";
import Loader from "../../../common/components/Loader";
import EventUpdateForm from "../forms/EventUpdateForm";
import { useEvent } from "../hooks/useEvent";

const EventUpdatePage = () => {
  const params = useParams();
  console.log(params);
  const { data, error, loading } = useEvent({
    input: params.id as String,
  });

  console.log("Data: ", data);

  if (loading) return <Loader />;
  if (error) return <CustomAlert>{error.message}</CustomAlert>;

  return (
    <>
      <Box maxW={{ base: "full", md: "xl" }} mx="auto">
        <Heading as="h2" size="md" mb={4}>
          Modifier une évènement
        </Heading>
        <EventUpdateForm
          event={data!.event}
          // subjects={subjectsQuery.data!.subjects}
        />
      </Box>
    </>
  );
};

export default EventUpdatePage;
