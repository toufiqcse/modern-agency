/* eslint-disable no-unused-vars */

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import './App.css'
import AllFeatures from './components/AllFeatures'
import CoreFeatures from './components/CoreFeatures'
import Works from './components/Works'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Testomonial from './components/Testomonial'
import Slider from './components/Slider'
import BlogSlider from './components/BlogSlider'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Divider from './components/Divider'

function App() {

  return (
    <>
      <div className='font-[Poppins]'>
        <Header />
        <Hero />
        <Features />
        <Services />
        <AllFeatures />
        <CoreFeatures />
        <Works />
        <Pricing />
        <Team />
        <Testomonial />
        <BlogSlider />
        <Subscribe />
        <Divider />
        <Footer />
      </div>

    </>
  )
}

export default App
