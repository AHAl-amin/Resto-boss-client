import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider
} from "react-router-dom";
import { router } from '../Routs/Routs.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './providers/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>

        <div className='max-w-6xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
