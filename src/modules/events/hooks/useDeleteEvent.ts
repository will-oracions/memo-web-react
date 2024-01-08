import { useCustomMutation } from "../../../api/apiClient";
import { Event } from "../event.model";
import { DELETE_SINGLE_QUERY } from "../events.query";

type VariablesType = {
  input: String;
};

export const useDeleteEvent = () =>
  useCustomMutation<{ deleteEvent: Event }, VariablesType>(DELETE_SINGLE_QUERY);
