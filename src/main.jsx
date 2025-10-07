import { StrictMode, Suspense } from 'react'
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
import { BounceLoader, ClipLoader } from "react-spinners";


const dataPromise = fetch('/data.json').then(res => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        // loader: () => fetch('/data.json').then(res => res.json()),
        element:
          <Suspense fallback={<span className='fixed inset-0 flex justify-center items-center bg-white z-50'><BounceLoader color="#4F46E5" size={100} /></span>}>
            <Home dataPromise={dataPromise}></Home>
          </Suspense>
      },
      {
        path: "apps",
        // loader: () => fetch('/data.json').then(res => res.json()),
        element:
          <Suspense fallback={<span className='fixed inset-0 flex justify-center items-center bg-white z-50'><BounceLoader color="#4F46E5" size={100} /></span>}>
            <Apps dataPromise={dataPromise}></Apps>
          </Suspense>
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
