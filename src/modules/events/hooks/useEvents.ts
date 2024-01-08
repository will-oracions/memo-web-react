import { useCustomQuery } from "../../../api/apiClient";
import { Event } from "../event.model";
import { GET_LIST_QUERY } from "../events.query";

export const useEvents = () =>
  useCustomQuery<{ events: Event[] }>(GET_LIST_QUERY);
