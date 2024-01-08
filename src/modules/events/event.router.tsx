import { RouteObject } from "react-router-dom";
import EventsListPage from "./pages/EventsListPage";

function EventRouter(): RouteObject[] {
  return [
    {
      path: "",
      element: <EventsListPage />,
    },
  ];
}

export default EventRouter;
