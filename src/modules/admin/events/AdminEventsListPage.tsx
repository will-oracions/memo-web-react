import { Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CustomAlert } from "../../../common/CustomForms";
import { CustomButton } from "../../../common/components";
import Loader from "../../../common/components/Loader";
import EventsList from "../../events/components/EventsList";
import { useEvents } from "../../events/hooks/useEvents";

const AdminEventsListPage = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useEvents();
  console.log("data: ", data);
  // const [deleteEvent, deleteMutation] = useDeleteEvent();

  // const handleDelete = (entry: Event) => {
  //   deleteEvent({
  //     variables: {
  //       input: entry.id,
  //     },
  //     refetchQueries: [{ query: GET_LIST_QUERY }],
  //     onCompleted: (data) => {
  //       console.log("deleted: ", data);
  //     },
  //   });
  // };

  // const showEvents = () => {
  //   return data?.events.map((event) => (
  //     <CardList
  //       key={event.id}
  //       title={event.name}
  //       content={event.description}
  //       url={`/events/${event.id}`}
  //     />
  //   ));
  // };

  if (loading) return <Loader />;
  if (error) return <CustomAlert>{error.message}</CustomAlert>;
  if (!data)
    return (
      <CustomAlert>
        Une erreur est survenue lors du traitement. Veuilez réssayer plus tard.
      </CustomAlert>
    );

  return (
    <>
      <Flex justify="space-between" alignItems="center" py={3}>
        <Heading as="h2" size="md" mb={4}>
          Liste des évènements
        </Heading>
        <Box>
          <CustomButton onClick={() => navigate("/events-create")}>
            Créer un évènement
          </CustomButton>
        </Box>
      </Flex>

      {/* <Box mb={4}>
        {errorMessage && (
          <CustomAlert status="error">{errorMessage}</CustomAlert>
        )}
        {error && <CustomAlert status="error">{error?.message}</CustomAlert>}
      </Box> */}

      <div className="c3ff8">
        {/* {showEvents()} */}
        {/* Search form */}
        {/* <SearchBar /> */}

        {/* Jobs header */}
        {/* <TableHeader /> */}

        {/* Job list */}
        <EventsList
          // onDeleteItem={handleDelete}
          // loadingAction={deleteMutation.loading}
          events={data.events}
        />

        {/* Pagination */}
        {/* <CustomPagination /> */}
      </div>
    </>
  );
};

export default AdminEventsListPage;
