import { useCustomQuery } from "../../../api/apiClient";
import { Event } from "../event.model";
import { GET_SINGLE_QUERY } from "../events.query";

type VariablesType = {
  input: String;
};

export const useEvent = (variables: VariablesType) =>
  useCustomQuery<{ event: Event }>(GET_SINGLE_QUERY, variables);
