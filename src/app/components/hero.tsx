'use client'
import {motion} from 'framer-motion'
import { fadeIn } from '../varients/variants'
import React from 'react'
import Image from 'next/image'
import Homepic from '../../../public/images/home.jpg'
import Button from './button'



function Hero() {
  return (
    <div className='  lg:px-12 p-4 max-w-screen-2xl mx-auto mt-28 text-white' id='home'>
        <div className=' bg-black rounded-xl'>
            <div className=' flex flex-col lg:flex-row md:flex-col justify-between items-center gap-10 p-10'>
                {/* Hero section content */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('up', 0.2)} // direction aur delay pass karein
                  viewport={{once:false, amount:0.7}}
             
                 className='  lg:w-3/5 text-center lg:text-left mt-10 px-10'>
                <h1 
                
                 className='  text-2xl lg:text-3xl md:text-3xl font-bold text-orange-500   '>Test the Best
                     Homemade Dishes </h1>
                     <p className=' pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed beatae voluptas, 
                        officia tempore incidunt similique et exercitationem repellat.</p>

                   <div className=' py-5 '><Button  text = 'Learn more!'/></div>

                </motion.div >
                {/* image */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('down', 0.2)} // direction aur delay pass karein
                  viewport={{once:false, amount:0.7}}
                className=' lg:p-10 md:p-10'>
                <Image className=' rounded-2xl  ' src={Homepic} alt={'Food image'}
                height={600}
                width={600}
                loading='lazy'/>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Hero