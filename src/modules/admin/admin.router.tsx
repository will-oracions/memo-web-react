import { RouteObject } from "react-router-dom";
import Login from "./Login";
import Manage from "./Manage";
import AdminEventsListPage from "./events/AdminEventsListPage";

function AdminRouter(): RouteObject[] {
  return [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "manage",
      element: <Manage />,
      children: [
        {
          path: "events",
          element: <AdminEventsListPage />,
        },
      ],
    },
  ];
}

export default AdminRouter;
