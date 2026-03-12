import React from 'react'
import img from '../assets1/img25.webp'
function Productdetails() {

    return (
        <div className=' h-screen  px-28 bg-gray-200'>
            <div className='flex  gap-9 min-h-full pt-36'>
                <div id='img' className='h-96 w-80 border '>
                    <img src={img} className='h-full w-full object-cover' alt=""/>
                </div>
                <div id='details' className=' flex flex-col gap-4'>
                    <div id="text" className='text-2xl '>MEn casual wear slim fit </div>
                    <div id='rating' >(122)</div>
                    <div id='price'>RS 5000</div>
                    <div id="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, natus!</div>
                    <div id='size' ><span className='text-lg'>Select Size</span>
                        <div className='flex gap-3 pt-2'>
                            <div id='small' className='bg-gray-400 px-3 py-2 w-10 flex justify-center'>S</div>
                            <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>M</div>
                            <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>L</div>
                            <div id='small' className='bg-gray-400 px-3 py-2 w-10 text-center'>XL</div>
                            <div id='small' className='bg-gray-400 px-3 py-2 w-10 flex justify-center'>XXL</div></div>
                    </div>
                    <div id='addtocart' className='bg-red-500 text-center p-2 w-[30%]  font-medium text-white mt-4'>ADD TO CART</div>

                </div>
            </div>
        </div>
    )
}

export default Productdetails
