import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../src/LayOuts/Main";
import Home from './../src/Pages/Home';

  export const router = createBrowserRouter([
    {
      path: "/",
     element:<Main></Main>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        }
     ]

    },
  ]);