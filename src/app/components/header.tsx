'use client'
import {Link, Element} from 'react-scroll'
import Button from './button'
import { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { link } from 'fs';








function Header() {
    let [togglemenu, setTogglemenu] = useState(false);



    const navbar = [
        {link : 'Home', path : 'home' },
        {link : 'About', path : 'about' },
        {link : 'Dishes', path : 'dishes' },
        {link : 'Contact', path : 'contact' }
]

const ToggleMenu = ()=>{
    setTogglemenu(!togglemenu)
}


  return (
   <header  className='z-10 sticky top-0 left-0 bg-black'>
    <div className=' flex justify-between p-6'>
    {/* Logo */}
    <div className=' ml-5'>
      <Link  key={'Home'} to='home'><h2 className=' text-4xl font-bold text-white cursor-pointer'><span className=' text-orange-500'>N</span>itoo.</h2></Link>
    </div>

    {/* navbar */}
    <nav className=' hidden mr-5 md:block lg:block text-white'>
        <ul className=' flex space-x-12 '>
            {
                navbar.map(({link, path})=><Link className=' cursor-pointer' activeClass='active' spy={true} key={link} to ={path} smooth={true} offset={-100}  ><li className=' mt-2 text-2xl font-medium hover:text-orange-500'>{link}</li></Link>)
            }
        </ul>
    </nav>


{/* button */}
    <div className=' hidden  lg:block '>
        <Button text='Sign UP'/>
   </div>

   
   <button className=' lg:hidden md:hidden text-white ' onClick={ToggleMenu}>{togglemenu? <MdClose size={30}/> : <VscMenu size={30}/> }</button>
   
    </div>

    {/* Mobile nav */}
    <nav className={`  lg:hidden md:hidden bg-secondary text-white py-6 fixed  left-0 w-screen ${togglemenu? 'block' : 'hidden'} `}>
        <ul className=' flex flex-col space-y-12 items-center '>
            {
                navbar.map(({link, path})=><Link className=' cursor-pointer' activeClass='active' spy={true} key={link} to={path} smooth={true} offset={-80} onClick={ToggleMenu}><li className=' text-xl font-medium hover:text-orange-500'>{link}</li></Link>)
            }
        </ul>
    </nav>

 

   </header>
  )
}

export default Header