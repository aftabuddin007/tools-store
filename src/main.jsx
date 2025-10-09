import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer className='position="top-center" autoClose={3000}'></ToastContainer>
  </StrictMode>,
)
