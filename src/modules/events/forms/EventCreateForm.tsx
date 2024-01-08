import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BuildFormUI, CustomAlert } from "../../../common/CustomForms";
import { Event } from "../event.model";
import { GET_LIST_QUERY } from "../events.query";
import { useCreateEvent } from "../hooks/useCreateEvent";
import { eventCreateDto } from "./EventCreate.type";
import eventFormMeta from "./EventFormMeta";

const eventCreateForm = () => {
  const navigate = useNavigate();
  const formHookReturn = useForm();
  // const subjectsQuery = useSubjects();
  const [sendReq, { loading, error }] = useCreateEvent();

  // const buildFormMeta = () => {
  //   // console.log(subjectsQuery.data);
  //   return eventFormMeta.map((meta) => {
  //     if (meta.name === "subjectId") {
  //       const options: FieldMetaOptions[] = subjectsQuery.data!.subjects.map(
  //         (subject) => ({
  //           label: subject.name,
  //           value: subject.id,
  //         })
  //       );
  //       return { ...meta, options };
  //     }
  //     return meta;
  //   });
  // };

  const onSubmit = (payload: eventCreateDto) => {
    console.log("payload: ", payload);
    // if (!subjectQuery.data) {
    //   throw new Error("No Subject Data");
    //   return;
    // }
    const { name, description, subjectId } = payload;

    sendReq({
      variables: {
        input: {
          name,
          description,
          subjectId,
        },
      },
      onCompleted: (data) => {
        console.log(data);
        navigate("/dashboard/students/1234/events-list");
      },
      refetchQueries: [{ query: GET_LIST_QUERY }],
    });
  };

  // if (subjectsQuery.loading) return <Loader />;
  // if (subjectsQuery.error)
  //   return <CustomAlert>{subjectsQuery.error.message}</CustomAlert>;

  return (
    <>
      <BuildFormUI<Event>
        isLoading={loading}
        submitButtonText="Créer la leçon"
        formHookReturn={formHookReturn}
        onSubmit={onSubmit}
        formMeta={
          //   buildFormMetaOptions<Subject>(
          eventFormMeta
          //   "subjectId",
          //   subjectsQuery.data!.subjects
          // )
        }
        // defaultValues={event}
      />
      <Box my={4}>
        {error && <CustomAlert show={!!error}>{error.message}</CustomAlert>}
      </Box>
    </>
  );
};

export default eventCreateForm;
