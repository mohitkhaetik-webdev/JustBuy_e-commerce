import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Additem } from '../redux/cartslice';
import { toast } from 'react-toastify';

function Productdetails() {
    let dispatch = useDispatch();
    let show = useSelector(state => state.selectedProduct)
    console.log(show)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return ( 
        show=== null ? null : (

            <div className=' min-h-screen  px-28 bg-gray-200' >
                <div className='flex  gap-9 min-h-full pt-36'>
                    <div id='img' className='h-96 w-80 border '>
                        <img src={show?.img} className='h-full w-full object-cover' alt="" />
                    </div>
                    <div id='details' className=' flex flex-col gap-4'>
                        <div id="text" className='text-2xl '>{show?.name}</div>
                        <div id='rating' >(122)</div>
                        <div id='price'>RS {show?.price}</div>
                        <div id="description">{show?.description}</div>
                        <div id='size' ><span className='text-lg'>Select Size</span>
                            <div className='flex gap-3 pt-2'>
                                <div id='small' className='bg-gray-400 px-3 py-2 w-10 flex justify-center'>S</div>
                                <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>M</div>
                                <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>L</div>
                                <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>XL</div>
                                <div id='small' className='bg-gray-400 px-3 py-2 w-10 flex justify-center'>XXL</div></div>
                        </div>
                        <div id='addtocart' className='bg-red-500 text-center cursor-pointer p-2 w-[30%]  font-medium text-white mt-4' onClick={() => { dispatch(Additem({ img: show?.img, name: show?.name, price: show?.price, description: show?.description, qty: show?.qty })); toast("Your item is added") }}>ADD TO CART</div>

                    </div>
                </div>
            </div>
        )
       
    )
}

export default Productdetails
