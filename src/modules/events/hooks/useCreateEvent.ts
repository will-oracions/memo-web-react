import { useCustomMutation } from "../../../api/apiClient";
import { Event } from "../event.model";
import { CREATE_QUERY } from "../events.query";

type VariablesType = {
  input: {
    name: string;
    description: string;
    subjectId: string;
  };
};

export const useCreateEvent = () =>
  useCustomMutation<{ createEvent: Event }, VariablesType>(CREATE_QUERY);
