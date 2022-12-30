import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import PageNotFound from '../Pages/404/PageNotFound'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Login/Register'
import AddTask from '../Pages/Tasks/AddTask'
import CompletedTasks from '../Pages/Tasks/CompletedTasks'
import MyTasks from '../Pages/Tasks/MyTasks'
import TaskDetails from '../Pages/Tasks/TaskDetails'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <MyTasks></MyTasks>,
        loader: () => fetch(''),
      },
      {
        path: '/home',
        element: <MyTasks></MyTasks>,
      },
      {
        path: '/my-tasks',
        element: <MyTasks></MyTasks>,
      },
      {
        path: '/completed-tasks',
        element: <CompletedTasks></CompletedTasks>,
      },
      {
        path: '/add-task',
        element: <AddTask></AddTask>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/tasks/:id',
        element: <TaskDetails></TaskDetails>,
        loader: ({ params }) =>
          fetch(
            `https://task-master-server-one.vercel.app/tasks/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/dashboard',
    element:
      // <PrivateRoute>
      {
        /* <DashboardLayout></DashboardLayout> */
      },
    // </PrivateRoute>
    children: [
      {
        path: '/dashboard',
        //   element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/wishlist',
        //   element: <MyWishList></MyWishList>,
      },
      {
        path: '/dashboard/allusers',
        element:
          //  <AdminRoute>
          // <AllUsers></AllUsers>
          {
            /* </AdminRoute> */
          },
      },
      {
        path: '/dashboard/addproduct',
        element:
          //  <AdminRoute>
          // <AddProduct></AddProduct>
          {
            /* </AdminRoute> */
          },
      },
      {
        path: '/dashboard/myproducts',
        element:
          //  <AdminRoute>
          {
            /* <MyProducts></MyProducts> */
          },
        //  </AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        //   element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-sage.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
])

export default Router
