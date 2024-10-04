"use client"
import {motion} from 'framer-motion'
import { fadeIn } from '../varients/variants'
import React from 'react'
import Button from './button'

function Contact() {
  return (
    <div className=' lg:px-12 max-w-screen-2xl mx-auto  my-28 p-4    ' id='contact'>
        <div className=' shadow-3xl rounded-2xl '>

<div className='flex lg:flex-row  justify-between '>
            {/* form */}
        <section className=' bg-black w-full lg:w-[75%] md:w-[60%]n rounded-2xl lg:rounded-l-2xl md:rounded-l-2xl md:rounded-r-none'>
            <div className=' p-10'>
           <motion.h2 
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('down', 0.2)} // direction aur delay pass karein
            viewport={{once:false, amount:0.7}}
           className=' text-orange-500 text-2xl lg:text-3xl md:text-3xl text-center lg:text-start md:text-start font-bold my-5'>Contact With Us!</motion.h2>
           <motion.form 
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('right', 0.2)} // direction aur delay pass karein
            viewport={{once:false, amount:0.7}}
           className=' text-white  '>

            <div className=' mb-5'>
            <label className=' block text-sm font-semibold '>Username:</label>
            <input className=' py-2 px-3 w-full border rounded-lg mt-2 bg-gray-800 b0' type="text" placeholder='Enter Your Name' />
             </div>

             <div className=' mb-5'>
            <label className=' block text-sm font-semibold'>Email:</label>
            <input className='py-2 px-3 w-full border rounded-lg mt-2 bg-gray-800 b0' type="text" placeholder='Enter Your email' />
             </div>


             <div className=' mb-5'>
            <label className=' block text-sm font-semibold'>Message:</label>
           <textarea className='py-2 px-3 w-full border rounded-lg mt-2 bg-gray-800 b0' placeholder='Write your message here'></textarea>
             </div>
           </motion.form>
           <motion.div 
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('up', 0.2)} // direction aur delay pass karein
            viewport={{once:false, amount:0.7}}
           className=' text-center md:text-start'>
            <Button text= 'Sent'/>
           </motion.div>
           </div>
        </section>
            {/* content */}
            <section className='hidden md:block md:w-[40%] lg:w-[30%] bg-orange-500 rounded-r-2xl text-zinc '>
              <motion.div 
               initial="hidden"
               whileInView={'show'}
               variants={fadeIn('up', 0.2)} // direction aur delay pass karein
               viewport={{once:false, amount:0.7}}
              className=' p-12'>
              <h2 className=' text-3xl font-bold my-5' >Reach Us</h2>

              <p className=' mt-14 mb-5 text-sm '><span className=' text-lg font-semibold'>Email: </span>example@gmail.com</p>
              <p className=' my-5 text-sm'><span className=' text-lg font-semibold'>Phone: </span>12345678910</p>
              <p className=' my-5 text-sm'><span className=' text-lg font-semibold'>Address: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi 
              ,</p>
              </motion.div>
            </section>

            </div>

        </div>
    </div>
  )
}

export default Contact