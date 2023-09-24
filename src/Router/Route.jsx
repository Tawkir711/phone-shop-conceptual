import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Faviourtes from '../Pages/Faviourtes/Faviourtes';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Phone from '../Pages/Phone/Phone';


const myCreateRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/phones.json'),
      },
      {
        path: '/favorites',
        element: <Faviourtes></Faviourtes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: () => fetch('/phones.json')
      }
    ]
  }
])

export default myCreateRoute;