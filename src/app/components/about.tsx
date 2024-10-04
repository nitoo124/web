"use client"
import {motion} from 'framer-motion'
import { fadeIn } from '../varients/variants'
import React from 'react'
import Image from 'next/image'
import about from '../../../public/images/about.png'
import Button from './button'







function Hero() {
    return (
        <div className='  lg:px-12 p-4 max-w-screen-2xl mx-auto mt-28 text-white' id='about'>
            <div className=' bg-black rounded-xl'>
                <div className=' flex flex-col lg:flex-row md:flex-col justify-between items-center gap-10 p-10'>

                    <motion.div
                       initial="hidden"
                       whileInView="show"
                       variants={fadeIn('right', 0.2)} // direction aur delay pass karein
                       viewport={{once:false, amount:0.7}}
                    className=' lg:text-left text-center lg:w-[50%] p-5'>
                        <h2 className=' text-3xl text-orange-500 font-bold mt-5  '>About us</h2>
                        <h5 className=' font-semibold mt-2'>Why Choose Us?</h5>
                        <p className=' mt-5 lg:line-clamp-none line-clamp-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita hic
                            facere voluptas esse, voluptatem saepe ut id sapiente, quibusdam commodi
                            aspernatur culpa quia dicta nisi voluptates illo inventore porro Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Quo nostrum voluptatibus fugiat possimus
                            rem recusandae ipsa a? Molestiae tempora perferendis ad eos minima! Doloribus
                            quae, numquam laudantium quasi tenetur saepe.</p>

                            <div className=' mt-5'>
                                <Button text = 'Order Now' />
                            </div>

                    </motion.div>
                    {/*image  */}
                    <motion.div
                       initial="hidden"
                       whileInView="show"
                       variants={fadeIn('left', 0.2)} // direction aur delay pass karein
                       viewport={{once:false, amount:0.7}}
                    >

                        <Image className=' rounded-2xl' src={about} alt='about pic'
                            height={600}
                            width={600}
                            loading='lazy'
                        />


                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Hero