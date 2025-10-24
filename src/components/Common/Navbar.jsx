import { useState } from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineShoppingBag,  HiOutlineUser} from "react-icons/hi"


const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <nav className='border-b-gray-950'>



      <div className="container mx-auto text-black  flex justify-between items-center py-4">

        {/* Logo */}
        <Link to="/">
          <h2 className="text-2xl font-bold"> My
           <span className='text-amber-500'>Shop</span>  </h2>
        </Link>

        {/* NavItems */}
        <div className='flex gap-6'>
          <Link className='text-2xl font-bold hover:text-gray-700' to="/">MEN</Link>
          <Link className='text-2xl font-bold hover:text-gray-700' to="/">WOMEN</Link>
          <Link className='text-2xl font-bold hover:text-gray-700' to="/">KIDS</Link>
          <Link className='text-2xl font-bold hover:text-gray-700' to="/">NEW ARRIVALS</Link>
        </div>

        {/* Search, wishlist, cart, user profile */}
        <div >
          {/* Search Box */}
          <div className='flex gap-6'>


            {/* User Profile */}
            <Link to="/">
              <HiOutlineUser />
            </Link>

            {/* Cart */}
            <button className='relative '>
              <HiOutlineShoppingBag />
              <span className='absolute top-0.5 -right-1.5 bg-amber-700 w-6 h-6 rounded-full'> 5 </span>
            </button>

            {/* Wishlist */}
            <button className='relative' onClick={toggleDrawer}>
              <HiOutlineShoppingBag />
              <span className='absolute top-0.5 -right-1.5 bg-amber-700 w-6 h-6 rounded-full'> 10 </span>
              
            </button>

            {/* Menu Button */}
            {/* <button>
              <HiBars3BottomRight />
            </button> */}
          </div>


        </div>

      </div>
    </nav>
  )
}

export default Navbar