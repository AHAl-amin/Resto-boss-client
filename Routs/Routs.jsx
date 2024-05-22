import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../src/LayOuts/Main";
import Home from './../src/Pages/Home';
import PopularMenu from "../src/Pages/PopularMenu";

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
          path:'/menu',
          element:<PopularMenu></PopularMenu>,
         
        }
     ]

    },
  ]);