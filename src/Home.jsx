import React from 'react'
import { Hero } from './components/Hero'
import { Foods } from './components/Foods'
import Drinks from './components/Drinks'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Foods/>
        {/* <Drinks/> */}
        <Footer/>
    </div>
  )
}
