import { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi"
// import { FcLike } from "react-icons/fc";
{/* <FcLike /> */ }
import { IoIosHeartEmpty } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <nav className=' border border-b-gray-200'>



      <div className="container mx-auto text-black  flex justify-between items-center py-2">

        {/* Logo */}
        <Link to="/">
          <h2 className="text-2xl font-bold"> My
            <span className='text-amber-500'>Shop</span>  </h2>
        </Link>

        {/* NavItems */}
        <div className='hidden md:flex gap-6'>
          <Link className='text-[16px] font-bold hover:text-gray-700' to="/">MEN</Link>
          <Link className='text-[16px] font-bold hover:text-gray-700' to="/">WOMEN</Link>
          <Link className='text-[16px] font-bold hover:text-gray-700' to="/">KIDS</Link>
          <Link className='text-[16px] font-bold hover:text-gray-700' to="/">NEW ARRIVALS</Link>
        </div>

        {/* Search, wishlist, cart, user profile */}
        <div >
          {/* Search Box */}
          <div className='flex gap-2'>

            <div className='hidden md:flex gap-6'>

           

            {/* User Profile */}
            <Link to="/">
              <HiOutlineUser className='text-2xl' />
            </Link>

            {/* Cart */}
            <button className='relative '>
              <HiOutlineShoppingBag className='text-2xl' />
              <span className='absolute -top-1.5 -right-4 text- text-white bg-amber-700 w-6 h-6 rounded-full'> 5 </span>
            </button>

            {/* Wishlist */}
            <button className='relative' onClick={toggleDrawer}>
              <IoIosHeartEmpty className='text-2xl' />
              <span className='absolute -top-1.5 -right-4 text-white bg-amber-700 w-6 h-6 rounded-full'> 10 </span>
            </button>

 </div>
            {/* Menu Button */}
            <CgMenuRightAlt className='text-2xl md:hidden' />
          </div>


        </div>

      </div>
    </nav>
  )
}

export default Navbar