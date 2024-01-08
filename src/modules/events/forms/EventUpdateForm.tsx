import { useForm } from "react-hook-form";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BuildFormUI, CustomAlert } from "../../../common/CustomForms";
import { GET_LIST_QUERY } from "../events.query";
import { useUpdateEvent } from "../hooks/useUpdateEvent";
import { eventCreateDto } from "./EventCreate.type";
import eventFormMeta from "./EventFormMeta";
import { Event } from "../event.model";

interface Props {
  event: Event;
}

const eventUpdateForm = ({ event }: Props) => {
  const navigate = useNavigate();

  // console.log("LLLeçon: ", event);
  const formHookReturn = useForm();
  const [sendReq, { loading, error }] = useUpdateEvent();

  const onSubmit = (payload: eventCreateDto) => {
    if (!event) return;

    console.log("payload: ", payload);
    const { name, description, subjectId } = payload;

    sendReq({
      variables: {
        input: {
          id: event.id,
          name,
          description,
          subjectId,
        },
      },
      onCompleted: () => {
        navigate("/dashboard/students/1234/events-list");
      },
      refetchQueries: [{ query: GET_LIST_QUERY }],
    });
  };

  // if (subjectsQuery.loading) return;

  // if (!subjectsQuery.data?.subjects)
  //   return (
  //     <CustomAlert>
  //       <Text>event Loading failed</Text>
  //     </CustomAlert>
  //   );

  return (
    <>
      <BuildFormUI<Event>
        isLoading={loading}
        submitButtonText="Modifiera "
        formHookReturn={formHookReturn}
        onSubmit={onSubmit}
        formMeta={
          eventFormMeta
          //   buildFormMetaOptions<Subject>(
          //   eventFormMeta,
          //   "subjectId",
          //   subjects
          // )
        }
        // defaultValues={{ ...event!, subjectId: event!.subject.id }}
      />
      <Box my={4}>
        {error && <CustomAlert show={!!error}>{error.message}</CustomAlert>}
      </Box>
    </>
  );
};

export default eventUpdateForm;
