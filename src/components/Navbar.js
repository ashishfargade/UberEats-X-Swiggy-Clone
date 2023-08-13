import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

export const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between 
      items-center p-4' >

      {/* Left side */}
      <div className='flex items-center'>

        <div className='cursor-pointer' onClick={()=> setNav(!nav)}>
            <AiOutlineMenu size={30}/>
        </div>

        <h1 className='text-2xl px-4 sm:text-2xl lg:text-4xl'>
          Uber <span className='font-semibold'>Eats</span> | <span className='font-semibold text-orange-600'>Swiggy</span>
        </h1>

        <div className='hidden lg:flex items-center bg-gray-200
          rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='px-1'>Pickup</p>
        </div>

      </div>

      {/* Search input */}
      <div className='bg-gray-200 rounded-full flex items-center 
        px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='Search foods'/>
      </div>

      <button className='bg-black text-white hidden md:flex 
        items-center py-2 rounded-full'>
        <BsFillCartFill/> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
      </div> : ''}
      
      
      {/* Side-Drawer menu */}
      <div className={nav ? 
        'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 duration-300'
      }>
        <AiOutlineClose size={35} onClick={()=> setNav(!nav)}
          className='absolute right-4 top-4 cursor-pointer pt-1.5'
        />

        <h2 className='text-2xl pt-4 absolute left-6 '>
          Uber <span className='font-bold'>Eats</span>
          <span className='px-2'>X</span>
          <span className='font-bold text-orange-600'>Swiggy</span>
        </h2>

        <nav className='mt-12'>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex items-center'>
              <TbTruckDelivery size={25} className='mr-4'/>
              Orders
            </li>
            <li className='text-xl py-4 flex items-center'>
              <MdFavorite size={25} className='mr-4'/>
              Favorites
            </li>
            <li className='text-xl py-4 flex items-center'>
              <FaWallet size={25} className='mr-4'/>
              Wallet
            </li>
            <li className='text-xl py-4 flex items-center'>
              <MdHelp size={25} className='mr-4'/>
              Help
            </li>
            <li className='text-xl py-4 flex items-center'>
              <AiFillTag size={25} className='mr-4'/>
              Promotion
            </li>
            <li className='text-xl py-4 flex items-center'>
              <BsFillSaveFill size={25} className='mr-4'/>
              Best Ones
            </li>
            <li className='text-xl py-4 flex items-center'>
              <FaUserFriends size={25} className='mr-4'/>
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
  
    </div>
  )
}
