import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './coponents/Root/Root.jsx';
import Home from './coponents/Home/Home.jsx';
import ErrorPage from './coponents/ErrorPage/ErrorPage.jsx';
import NewArrivals from './coponents/NewArrivals/NewArrivals.jsx';
import Login from './coponents/Login/Login.jsx';
import Register from './coponents/Register/Register.jsx';
import NewArrivalDetails from './coponents/NewArrivalDetails/NewArrivalDetails.jsx';
import Favourite from './coponents/Favourite/Favourite.jsx';

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
        path: '/jobs',
        element: <NewArrivals></NewArrivals>
      },
      {
        path: '/job/:id',
        element: <NewArrivalDetails></NewArrivalDetails>,
        loader: () => fetch('../cardinfo.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/favourite',
        element: <Favourite></Favourite>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
