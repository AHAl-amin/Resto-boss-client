import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../src/LayOuts/Main";
import Home from './../src/Pages/Home';
import PopularMenu from "../src/Pages/PopularMenu";
import Menu from "../src/Pages/Menu";

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
        }
     ]

    },
  ]);