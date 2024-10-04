import React from 'react'
import Link from 'next/link'
import  { FaArrowRight } from "react-icons/fa6"; 
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";








function Footer() {
  return (
   <footer className='bg-black'>

    {/*  */}
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 justify-center  md:justify-between  p-10  '>
        {/* Logo */}
    <div className=' md:ml-5 mt-10'>
      <Link href='/'><h2 className=' text-4xl font-bold text-white'><span className=' text-orange-500'>N</span>itoo.</h2></Link>
    </div>

    {/* links */}
    <div className=''>
        <h2 className='text-xl font-semibold text-orange-500 mb-5 ml-2 mt-10'>Links</h2>
    <div className='  text-white flex gap-2 mt-3 text-sm'>
     <FaArrowRight className=' text-[12px] mt-1'/> <Link href='/'>Home</Link>
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>About</Link>
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>Dishes</Link>
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>Contact</Link>
    </div>
    </div>

    {/* dishes */}

    <div className=' mt-10'>
        <h2 className='text-xl font-semibold text-orange-500 mb-5 ml-2 '>Dishes</h2>
    <div className='  text-white flex gap-2 mt-3 text-sm'>
     <FaArrowRight className=' text-[12px] mt-1'/><p>Pizza</p> 
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/><p>Noodles</p> 
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/><p>Pasta</p> 
    </div>
    <div className='  text-white flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/><p>Burger</p> 
    </div>
    </div>

    {/* Question */}
    <div className='mt-10'>
    <h2 className='text-xl font-semibold text-orange-500 mb-5 ml-2'>Have a Question?</h2>

    <div className='  text-white flex gap-2 my-3'>
     <IoLocationOutline className='text-xl '/> <p>Karachi, Pakistan</p>
    </div>
    <div className='  text-white flex gap-2 my-3'>
     <FaPhoneAlt className='text-[15px] mt-1'/> <p>12345678910</p>
    </div>
    <div className='  text-white flex gap-2 my-3'>
     <MdEmail className='text-xl mt-1 '/> <p>example@gmail.com</p>
    </div>
    </div>
    </div>

    {/* social medial icons */}
    <div className=' text-white flex justify-center gap-8 text-3xl mt-5 pb-10 font-bold'>

    <FaFacebook  className=' hover:text-orange-500 hover:animate-bounce' />
    <FaInstagram className=' hover:text-orange-500 hover:animate-bounce' />
    <FaWhatsapp className=' hover:text-orange-500 hover:animate-bounce' />
    </div>
    {/* Copyright Text */}
    <div className='mt-3 text-center text-white text-sm'>
        <p className=' pb-5'>Copyright © created by Nitoo Kumari</p>
        </div>
   </footer>
  )
}

export default Footer