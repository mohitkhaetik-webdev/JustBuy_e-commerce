import React, { useContext, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteCircleIcon, Filter, Search01Icon, ShoppingBasket01Icon, UserIcon } from '@hugeicons/core-free-icons'
import { Context } from '../context/context'
import { useSelector } from 'react-redux'
import productsecond from '../basic'
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  let { setcartslide } = useContext(Context)
  let { setproduct } = useContext(Context)
  let { active, setactive, input, setinput } = useContext(Context)
  const {

    isAuthenticated,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    
  } = useAuth0();
   const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  useEffect(() => {
    let newfilteritem = productsecond.filter((item) =>
      item.name.includes(input) || item.name.toLowerCase().includes(input)
    )
    setproduct(newfilteritem)
  }, [input])

  let name = [{ id: "1", name: "Ladies" }, { id: "1", name: "Mens" }, { id: "1", name: "Kids" }, { id: "1", name: "Home" }, { id: "1", name: "Beauty" }
  ]
  let items = useSelector(state => state.cart)
  function Filter(category) {
    setactive(category)

    if (category === "Home") {
      setproduct(productsecond)
    }
    else {
      let newfilter = productsecond.filter((item) => (
        item.type === category
      ))
      setproduct(newfilter)
    }
  }
  return (
    <div className='min-w-full p-5  flex items-center bg-white fixed top-0%  z-10 gap-5' id='navbar'>

      <div id='logo'>
        <div className='font-bold text-xl '>Justbuy</div>
      </div>

      <div className="text-gray-500 flex  w-full items-center justify-end font-medium gap-5 " id='options'>

        <div className=' gap-16 font-sans tracking-[2px]  cursor-pointer hidden lg:flex mx-auto  '>
          {name.map((item) => (
            <div className={`hover:text-black ${active === item.name ? "text-black" : null}`} key={item.id} onClick={() => { Filter(item.name); }} >{item.name}</div>
          ))}
        </div>


        <div id='options-2' className='flex gap-5 items-center  ' onSubmit={(e) => e.preventDefault()}>
          <div id="searchbar" className='flex sm:flex sm:w-50  bg-transparent sm:border   border-gray-500 p-2 rounded-2xl gap-2 '>
            <div><HugeiconsIcon icon={Search01Icon} /></div>
            <input type="text" name="" placeholder='search here' className='outline-0 hidden sm:flex' onChange={(e) => setinput(e.target.value)} value={input} />
          </div>

          
          

          {isAuthenticated ? (
            <>
              

              {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

              <button onClick={logout}>Logout</button>
            </>
          ):(<>
             {/* <button className='button-styling' onClick={login}>Login</button> */}
             <div id="signin" onClick={login}><HugeiconsIcon icon={UserIcon} /></div></>
          ) }
         <div id="fav"><HugeiconsIcon icon={FavouriteCircleIcon} /></div>

          <div id="cart" className='' onClick={() => (setcartslide(true))}><HugeiconsIcon icon={ShoppingBasket01Icon} className='relative' />
          </div>
          <div id="cartno" className='bg-gray-400 rounded-full flex justify-center h-4 w-4 items-center absolute top-5 right-2'><span className='text-[10px] pt-0.5'>{items.length}</span></div>
        </div>

      </div>
    </div>
  )
}

export default Nav
