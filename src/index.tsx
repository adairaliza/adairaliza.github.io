import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './components/welcome/Welcome';
import Death from "./components/death/Death";
import Entry from "./components/entry/Entry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/death",
    element: <Death />
  },
  {
    path: "/entry",
    element: <Entry />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
