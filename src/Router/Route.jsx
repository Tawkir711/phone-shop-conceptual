import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Faviourtes from '../Pages/Faviourtes/Faviourtes';
import Login from '../Pages/Login/Login';


const myCreateRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
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
      }
    ]
  }
])

export default myCreateRoute;