import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './coponents/Root/Root.jsx';
import Home from './coponents/Home/Home.jsx';
import ErrorPage from './coponents/ErrorPage/ErrorPage.jsx';
import NewArrivals from './coponents/NewArrivals/NewArrivals.jsx';
import NewArrival from './coponents/NewArrival/NewArrival.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/fashion',
        element: <NewArrivals></NewArrivals>
      },
      {
        path: '/fashion/:id',
        element: <NewArrival></NewArrival>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
