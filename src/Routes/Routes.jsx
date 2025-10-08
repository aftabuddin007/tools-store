import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Installation from '../pages/Installation/Installation';
import Banner from '../pages/Banner/Banner';

const router = createBrowserRouter([{
 path:'/',
 element:<Root></Root> , 
  children:[
    {
        path:'/',
        element:<Banner></Banner>
    },
    {
  path:'/products',
  element:<Products></Products>
},
 {
  path:'/install',
  element:<Installation></Installation>
}
  ]
}])
export default router
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import Root from './Layout/Root.jsx'import { createBrowserRouter, RouterProvider } from 'react-router'
// import Root from './Layout/Root.jsx'




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//   },
// ]);