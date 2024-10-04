"use client"
import {motion} from 'framer-motion'
import { fadeIn } from '../varients/variants'
import React from 'react'
import Image from 'next/image'
import pasta from '../../../public/images/pasta.png'
import dish2 from '../../../public/images/dish2.jpg'
import dish3 from '../../../public/images/dish3.jpg'

import Button from './button'
import { getPageStaticInfo } from 'next/dist/build/analysis/get-page-static-info'

function Dishes() {
  return (
    <main className=' my-24 lg:px-14 px-4 max-w-screen-2xl mx-auto' id='dishes' >

      <div className=' flex lg:flex-row flex-col justify-between items-start gap-10   '>
        {/* Content section */}
        <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 0.2)} // direction aur delay pass karein
        viewport={{once:false, amount:0.5}} 
         
        className=' bg-black  md:bg-white  lg:w-1/4  p-6 rounded-2xl lg:text-start text-center'>
          <h2 className=' text-orange-500 text-4xl font-bold  mb-3'>Our Special Dishes</h2>
          <p className=' text-white md:text-black text-base text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium iste 
            suscipit dicta quibusdam sit at nulla iusto, atque laboriosam magnam corporis omnis.
             Aliquam laudantium dicta at deleniti? Repellat, sunt!</p>

          <div className=' mt-4'>
          < Button text=' Order Now!'/>
            </div> 

        </motion.section >

        {/* Dishes section */}
        <section className='  w-full lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-3 justify-center 
        lg:items-start md:items-start items-center gap-5 lg:gap-10 md:gap-10 lg:shadow-3xl md:shadow-3xl
         lg:p-10 md:p-10 rounded-2xl  '>
  
      {/* Dish 1*/}
  

      <motion.div 
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 0.2)} // direction aur delay pass karein
        viewport={{once:false, amount:0.5}}
      className=' - rounded-[35px]   text-center shadow-4xl p-3 flex justify-center items-center hover:bg-black hover:text-white duration-1000 '>
          <div className='p-8'>
          {/* image */}
          <Image className=' rounded-2xl ' src={pasta} alt='yummy pasta'
          width={400}
          height={400}
          loading='lazy'/>
          <h3 className=' text-center mt-5 text-2xl font-bold text-orange-500'>Testy Pasta</h3>
          <div className=' my-4'>
          <Button text = 'Order Now' />
          </div>
          
        </div>
    </motion.div>

        
          {/* Dish 2*/}
  
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 0.2)} // direction aur delay pass karein
            viewport={{once:false, amount:0.5}}
          className=' - rounded-[35px]   lg:mt-[40%] md:mt-[40%] text-center shadow-4xl p-3 flex justify-center items-center hover:bg-black hover:text-white duration-1000 '>
          <div className='p-8'>
          {/* image */}
          <Image className=' rounded-2xl ' src={dish2} alt='yummy pasta'
          width={400}
          height={400}
          loading='lazy'/>
          <h3 className=' text-center mt-5 text-2xl font-bold text-orange-500'>Testy Food</h3>
          <div className=' my-4'>
          <Button text = 'Order Now' />
          </div>
          
        </div>
    </motion.div>

    {/* Dish 3*/}
  
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 0.2)} // direction aur delay pass karein
      viewport={{once:false, amount:0.5}}
    className=' - rounded-[35px]   text-center shadow-4xl p-3 flex justify-center items-center  hover:bg-black hover:text-white duration-1000'>
          <div className='p-8'>
          {/* image */}
          <Image className=' rounded-2xl ' src={dish3} alt='yummy pasta'
          width={400}
          height={400}
          loading='lazy'/>
          <h3 className=' text-center mt-5 text-2xl font-bold text-orange-500'>Testy Pizza</h3>
          <div className=' my-4'>
          <Button text = 'Order Now' />
          </div>
        </div>
    </motion.div>
         

        </section>
      </div>

    </main>
  )
}

export default Dishes