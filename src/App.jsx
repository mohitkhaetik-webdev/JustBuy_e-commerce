import React from 'react'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div className=''>
      <Home/>
      <ToastContainer position='bottom-right'
      toastClassName="text-xs md:text-base !w-60 md:!w-80" />
    </div>
  )
}
export default App
