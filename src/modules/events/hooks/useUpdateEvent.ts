import { useCustomMutation } from "../../../api/apiClient";
import { Event } from "../event.model";
import { UPDATE_QUERY } from "../events.query";

type VariablesType = {
  input: {
    id: string;
    name: string;
    description: string;
    subjectId: string;
  };
};

export const useUpdateEvent = () =>
  useCustomMutation<Event, VariablesType>(UPDATE_QUERY);
// export const useCreateevent = useMutation();
