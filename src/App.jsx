import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Quotes from "./pages/Quotes";
import AboutMe from "./pages/AboutMe";

import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="inicio" />,
      },
      {
        path: "inicio",
        element: <Home />,
      },
      // {
      //   path: "generador",
      //   element: <Generator />,
      // },
      // {
      //   path: "citas",
      //   element: <Quotes />,
      // },
      // {
      //   path: "sobre-mi",
      //   element: <AboutMe />,
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
