import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from "./components/main/Main";
import Welcome from './components/welcome/Welcome';
import Death from "./components/death/Death";
import BlackHole from "./components/black-hole/BlackHole";
import { blackHoleList } from "./constants";

const routes = blackHoleList.map((url: string) => ({
  path: `/${url}`,
  element: <BlackHole />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      ...routes,
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "/death",
        element: <Death />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
