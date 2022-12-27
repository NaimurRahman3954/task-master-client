import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import PageNotFound from '../Pages/404/PageNotFound'
import Home from '../Pages/Home/Home'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(''),
      },
      {
        path: '/home',
        //   element: <Home></Home>,
      },
      {
        path: '/categories',
        //   element: <Categories></Categories>,
      },
      {
        path: '/blog',
        //   element: <Blog></Blog>,
      },
      {
        path: '/login',
        //   element: <Login></Login>,
      },
      {
        path: '/register',
        //   element: <Register></Register>,
      },
      {
        path: '/categories/:id',
        element:
          //  <PrivateRoute>
          {
            /* <Products></Products> */
          },
        //  </PrivateRoute>
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-sage.vercel.app/categories/${params.id}`
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
