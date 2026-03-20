import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon } from '@hugeicons/core-free-icons'
import { useDispatch } from 'react-redux'
import { Additem } from '../redux/cartslice'
import { toast } from 'react-toastify'
import { showdetails } from '../redux/productslice'
import { useNavigate } from 'react-router-dom'

function Card({ img, price, name, id, qty, description }) {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  return (
    <div className='lg:px-0 px-5' onClick={() => { dispatch(showdetails({ img, price, name, id, qty, description })); navigate('/Productdetails') }} >
      <div className=' max-w-[250px]  space-y-2 '>
        <div id="img" className='h-75 w-52  group overflow-hidden'><img src={img} className='h-full w-full object-cover group-hover:scale-105 transition-all duration-500' alt="" /></div>
        <div className='font-newstyle flex justify-between'>{name} <span className='hover:text-red-600  ' ><HugeiconsIcon icon={FavouriteIcon} /></span> </div>
        <div className='font-mono font-bold text-xl'>Rs{price}</div>
        <div className='flex justify-between items-center'>
          <div id='addtocart' className='bg-red-500 text-center py-1 px-2 text-sm   font-medium text-white rounded-sm cursor-pointer' onClick={(e) => {dispatch(Additem({ id, name, img, price, qty, description })); toast("Your item is added"); e.stopPropagation() }}>ADD TO CART</div>
          <span className='rounded-sm bg-gray-300 text-center  p-1 text-[10px] '>FREE DELIVERY</span>
        </div>
      </div>
    </div>
  )
}
export default Card
