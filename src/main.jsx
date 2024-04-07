import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styling/index.css";
import LandingPage from "./routes/LandingPage";
import Partybuilder from "./routes/PartyBuilderPage";
import Quiz from "./routes/QuizPage";
import Page from "./routes/Page";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./styling/theme";

/**
 * https://reactrouter.com/en/main
 * createBrowserRouter enables client side routing
 * We define Page as our "Parent Route" - Page ensures that every following route has the Header, see /routes/Page-jsx
 * Furthermore we create seperate Paths for the child Routes: Landingpage as "root" page, Partybuilder and Quiz as separate Routes
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
