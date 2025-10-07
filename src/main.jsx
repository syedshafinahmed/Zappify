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
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AppDetails from './Components/AppDetails/AppDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        loader: () => fetch('/data.json').then(res => res.json()),
        Component: Home
      },
      {
        path: "apps",
        loader: () => fetch('/data.json').then(res => res.json()),
        Component: Apps
      },
      {
        path: "installation",
        Component: Installation
      },
      {
        path: "appdetails/:id",
        loader: ({ params }) =>
          fetch('/data.json')
            .then(res => res.json())
            .then(data => data.find(item => item.id === Number(params.id))),
        Component: AppDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
