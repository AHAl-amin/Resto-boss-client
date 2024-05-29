import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../src/LayOuts/Main";
import Home from './../src/Pages/Home';
import PopularMenu from "../src/Pages/PopularMenu";
import Menu from "../src/Pages/Menu";
import Order from "../src/Pages/Order";
import Login from "../src/Pages/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
     element:<Main></Main>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/popularMenu',
          element:<PopularMenu></PopularMenu>,
         
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
     ]

    },
  ]);