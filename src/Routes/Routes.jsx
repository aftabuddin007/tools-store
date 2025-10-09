import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Installation from '../pages/Installation/Installation';
import Banner from '../pages/Banner/Banner';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import AllError from '../AllError/AllError';
import Loading from '../pages/Loading/Loading';

const router = createBrowserRouter([{
 path:'/',
 element:<Root></Root> , 
 errorElement:<AllError></AllError>,
 hydrateFallbackElement:<Loading></Loading>,
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
},{
  path:'/productDetail/:id',
  element:<ProductDetails></ProductDetails>
}
  ]
},{
  path:'*',
  element:<AllError></AllError>
}
])
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