import React from 'react'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify'
import Productdetails from './pages/productdetails'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path: "/",
    element:<Home/> ,
  },
  {
    path: "/Productdetails",
    element:<Productdetails/> ,
  }
])




function App() {
  return (
    <div className=''>
      <ToastContainer position='bottom-right'
      toastClassName="text-xs md:text-base !w-60 md:!w-80" />
      
      <RouterProvider router={router} />
    </div>
  )
}
export default App
