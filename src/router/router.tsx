import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";

import Homepage from "../modules/home/Homepage";
import VerseListPage from "../modules/home/pages/VerseListPage";
import ChaptersListPage from "../modules/home/pages/ChaptersListPage";
import BooksListPage from "../modules/home/pages/BooksListPage";
import VerseReaderLayout from "../VerseReaderLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/bible" />,
      },
      {
        path: "bible",
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: ":bookSlug",
            children: [
              {
                index: true,
                element: <BooksListPage />,
              },
              {
                path: ":chapterSlug",
                element: <VerseReaderLayout />,
                children: [
                  {
                    index: true,
                    element: <VerseListPage />,
                  },
                  // {
                  //   path: ":verseSlug",
                  //   element: <VerseListPage />,
                  // },
                ],
              },
            ],
          },
        ],
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
