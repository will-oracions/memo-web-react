import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";

import Homepage from "../modules/home/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      // {
      //   path: "events",
      //   element: <EventLayout />,
      //   children: [...EventRouter()],
      // },
      // {
      //   path: "admin",
      //   element: <EventLayout />,
      //   children: [...AdminRouter()],
      // },
    ],
  },
]);
