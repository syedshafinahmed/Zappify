import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Apps from './Components/Apps/Apps.jsx';
import Installation from './Components/Installation/Installation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path:"/home",
        Component: Home
      },
      {
        path:"apps",
        Component: Apps
      },
      {
        path:"installation",
        Component: Installation
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
