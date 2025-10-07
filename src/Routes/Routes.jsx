import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';

const router = createBrowserRouter([{
 path:'/',
 element:<Root></Root>   
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