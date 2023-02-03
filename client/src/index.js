import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import './index.css'
import ActivityForm from './Pages/ActivityForm';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path:'/activity',
    element:<ActivityForm/>
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


