import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";

import EventRouter from "../modules/events/event.router";
import { EventLayout } from "../modules/events";
import AdminRouter from "../modules/admin/admin.router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/events" />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [...EventRouter()],
      },
      {
        path: "admin",
        element: <EventLayout />,
        children: [...AdminRouter()],
      },
    ],
  },
]);
