import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styling/index.css";
import Landingpage from "./routes/Landingpage";
import ErrorPage from "./routes/ErrorPage";
import Partybuilder from "./routes/Partybuilder";
import Quiz from "./routes/Quiz";
import Page from "./routes/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/partybuilder",
        element: <Partybuilder />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
