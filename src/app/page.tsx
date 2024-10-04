import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Dishes from './components/dishes'
import About from './components/about'
import Contact from './components/contact'

function page() {
  return (
    <div>
     
      <Hero/>
      <Dishes/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page