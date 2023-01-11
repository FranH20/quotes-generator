import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Generator from './pages/Generator';

export const pathLinks = ["inicio", "generador", "citas", "información", "Sobre mi"];

const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />,
      children: [
        {
          path: pathLinks[0],
          element: <Home /> 
        },
        {
          path: pathLinks[1],
          element: <Generator />
        }
      ]
  }
]);

export const App = () => <RouterProvider router={router} />

