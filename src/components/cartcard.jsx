import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { MultiplicationSignIcon } from '@hugeicons/core-free-icons'
import { useDispatch } from 'react-redux'
import { decrementitem, incrementitem, removeItem } from '../redux/cartslice'


function Cartcard({ img, name, price, qty, id,description }) {
    let dispatch = useDispatch()

    return (
        <div>
            <div className='flex mt-5 border rounded-lg mx-4 p-2  bg-linear-to-b from-gray-300  via-gray-200 to-gray-50'>
                <div id="img" className='h-20 w-20 rounded-lg overflow-hidden'><img src={img} className='h-full w-full object-cover' alt="" /></div>
                <div id='details' className='pl-4 grow text-[10px] sm:text-base'>
                    <div className=' flex justify-between uppercase font-medium  '>{name} 
                        <div className='flex ' onClick={() => (dispatch(removeItem({ id })))}><HugeiconsIcon className='h-4 w-4 sm:h-6 sm:w-6' icon={MultiplicationSignIcon}/>REMOVE</div>
                        </div>
                    <div>Rs{price}</div>
                    <div className='flex justify-between text-gray-400 items-center pt-1 '>
                        <div className='flex '>
                            <div>Size:</div>
                        </div>
                        <div className='p-1 border rounded-lg'>
                            <span className='p-2' onClick={() => dispatch(incrementitem({ id }))}>+</span>
                            <span className='p-2'>{qty}</span>
                            <span className='p-2' onClick={() => qty > 1 ? dispatch(decrementitem({ id })) : null}>-</span></div>
                    </div>
                    <div id="description" className='text-sm' >{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Cartcard
