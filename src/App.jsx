import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Quotes from './pages/Quotes';
import AboutMe from './pages/AboutMe';

import { PATHLINKS } from "./hooks/constants";

const router = createBrowserRouter([
  {
      element: <Root />,
      children: [
        {
          index: true,
          element: <Navigate to={PATHLINKS[0]} />
        },
        {
          path: PATHLINKS[0],
          element: <Home />
        },
        {
          path: PATHLINKS[1],
          element: <Generator />
        },
        {
          path: PATHLINKS[2],
          element: <Quotes />
        },
        {
          path: PATHLINKS[3],
          element: <AboutMe /> 
        }
      ]
  }
]);

export const App = () => <RouterProvider router={router} />

