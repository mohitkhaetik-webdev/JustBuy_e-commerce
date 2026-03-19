
import React, { useContext, useEffect } from 'react'
import Card from './card'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel02Icon, CloudAngledRainFreeIcons, MultiplicationSignIcon } from '@hugeicons/core-free-icons'
import { Context } from '../context/context.jsx'
import { useSelector } from 'react-redux'
import Cartcard from './cartcard.jsx'
import productfirst from '../basicproductfirst.jsx'
import bannerimg from "../assets1/bannerimg.webp"
import productsecond from '../basic.jsx'


function Herosection() {

    let items = useSelector(state => state.cart)
    console.log(items)
    let { product } = useContext(Context)
    let { cartslide, setcartslide, active, input } = useContext(Context)
    let Subtotal = items.reduce((total, e) => total + e.price * e.qty, 0)
    let Deliveryfees = 20
    let taxes = Subtotal * 0.5 / 100
    let Total = Math.floor(Subtotal + Deliveryfees + taxes)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [active])
    return (
        <div className='h-auto min-w-full  bg-linear-to-b from-blue-50  via-purple-50 to-pink-50 pt-20' id='herosection'>

            {input === "" && active === "Home" ? (<div id="banner" className=' h-full  px-5 lg:px-28  flex flex-col items-center justify-between gap-8  md:flex-row '>
                <div id='banner-1' className='max-w-3xl h-96  flex flex-col gap-8 font-sans items-center md:items-start'>
                    <div className='font-bold text-3xl lg:text-4xl xl:text-6xl text-gray-500'>New Arrivals</div>

                    <div>
                        <h1 className='text-3xl lg:text-4xl xl:text-6xl font-medium text-gray-500 max-w-7xl flex-1 '>
                            All your fashion 🫶needs  is <br /> here with new <span className='text-black'>collections</span> <br />every season
                        </h1>
                    </div>

                    <div>
                        <div className='font-medium text-lg'>Sale Offer</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sint accusamus placeat aspernatur temporibus quo rem. Delectus dicta laboriosam</p>
                    </div>

                    <div id='check button' className='p-4 rounded-4xl bg-white w-[150px] text-center font-bold'>
                        ORDER NOW
                    </div>
                </div>

                <div id='banner-2  ' className=' w-72 h-4/5 shrink-0'>
                    <img src={bannerimg} className=' w-full h-full object-cover' alt="" />
                </div>
            </div>) : null}




            <div id="newcollection" className='min-h-screen flex  flex-col items-center lg:px-28 px-5'>

                <div className='py-10 flex flex-col items-center'>
                    <div className='flex justify-center font-bold font-medium text-4xl  lg:px-0 px-5 '>{active}</div>
                    <div className='border mt-3 w-30 flex   '></div>
                </div>



                <div className='flex flex-wrap gap-8 justify-center'>
                    <div id='showing-result ' className='flex justify-start w-full'><div></div>Showing 1-{product.length} out of {productsecond.length} Products</div>
                    {

                        product.map((a) => (
                            <div className=''>
                                <Card img={a.img} id={a.id} price={a.price} name={a.name} key={a.id} qty={a.quantity} description={a.description} />
                            </div>
                        ))}
                </div>

                <div className='py-10 flex flex-col items-center'>
                    <div className='flex justify-center font-bold font-medium text-2xl lg:px-0 px-5'>POPULAR IN COLLECTION</div>
                    <div className='border mt-3 w-30 flex justify-center '></div>
                </div>

                <div className='flex flex-wrap gap-8 justify-center '>{
                    productfirst.map((a) => (
                        <Card img={a.img} id={a.id} price={a.price} name={a.name} key={a.id} qty={a.quantity} description={a.description} />
                    ))}
                </div>
            </div>

            <div id='return-policy' className='mx-5 mt-5 border border-gray-500 py-3 flex rounded-md justify-center text-sm lg:text-lg '>
                <div className='flex items-center px-1 sm:px-5 lg:px-10  gap-1 '>
                    <img src="	https://www.meesho.com/assets/Icons/returns.svg" className='h-[25px] w-[25px]' alt="" />
                    <span>7 Days Easy Return</span>
                </div>
                <a href="" className='text-gray-300'>|</a>
                <div className='flex items-center px-1 sm:px-5 lg:px-10 gap-1'>
                    <img src="		https://www.meesho.com/assets/Icons/cod.svg" className='h-[25px] w-[25px]' alt="" />
                    <span>Cash on Delivery</span>
                </div>
                <a href="" className='text-gray-300'>|</a>
                <div className='flex items-center px-1 sm:px-5 lg:px-10 gap-1'>
                    <img src="https://www.meesho.com/assets/Icons/lowest-price.svg" className='h-[25px] w-[25px]' alt="" />
                    <span>Lowest Prices</span>
                </div>
            </div>

            <div id="photodiscount-ad" className=' pt-5 relative'>
                <div className=''><img src="	https://images.meesho.com/images/marketing/1772432149503.webp" className='' alt="" /></div>
                <div className='space-y-6 absolute top-[40%] right-[5%] '>
                    <div className=' font-bold text-2xl text-white'>Smart Shopping <br /> Trusted by Millons</div>
                    <div className=''><span className='bg-white px-5 py-2 rounded-xl'>Shopnow</span></div>
                </div>
            </div>

            <div id='cartinfo' className={`w-full md:max-w-[450px] fixed top-0 bg-gray-100 h-full right-0 flex flex-col ${cartslide ? "translate-x-0" : "translate-x-full"} transition-all duration-500  z-20`} >
                <div id='title' className='flex  font-bold text-2xl p-4 justify-between items-center'>Cart items<span onClick={() => (setcartslide(false))}><HugeiconsIcon icon={Cancel02Icon} /></span></div>
                <div className='overflow-y-auto overscroll-contain h-full '>{items.map((e) => (
                    <Cartcard id={e.id} name={e.name} price={e.price} img={e.img} qty={e.qty} description={e.description} />
                ))}
                    <div className='mx-7.5  mt-6 border border-gray-400'></div>


                    <div id='amount-section' className='pt-6 px-7.5 font-medium'>
                        {Subtotal ?
                            <>
                                <div className='flex justify-between mt-0.5'>
                                    Subtotal
                                    <div>Rs {Subtotal} </div>
                                </div>

                                <div className='flex justify-between mt-0.5'>
                                    Delivery fees
                                    <div>Rs{Deliveryfees} </div>
                                </div>

                                <div className='flex justify-between mt-0.5'>
                                    Taxes
                                    <div>Rs{taxes}</div>
                                </div>

                                <div className='  mt-6 border border-gray-400'></div>

                                <div className='flex justify-between mt-6 text-lg '>
                                    Total
                                    <div>Rs{Total} </div>
                                </div>

                                <div className='group bg-green-300 flex items-center text-lg font-medium justify-center
                            p-1.5 rounded-md hover:opacity-80 cursor-pointer my-6 '>
                                    <div className='group-hover:scale-[1.03] transition-transform duration-300 will-change-transform transform-gpu' >Place order</div>
                                </div>
                            </>
                            : <div className='text-center font-medium text-2xl'>
                                Empty Cart
                            </div>}

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Herosection
