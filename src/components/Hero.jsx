/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero() {
    return (
        <div className=''>

            <div className='max-w-4xl md:mt-[100px] mt-[50px] mx-auto text-center px-2 md:px-0'>
                <h1 className='text-primary  font-semibold md:text-[70px] text-[35px] '>Top Quality Digital Products To Explore</h1>
                <p className='text-secondary  text-[18px] font-normal md:mt-8 mt-4 md:px-32 leading-10'>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies
                    best design system guidelines ever.</p>
                <button className='outline-none border-none bg-button text-white mt-8 px-[47px] py-[13px] rounded-full'>Explore</button>
            </div>

            <div className='relative'>
                <div className='flex items-center justify-between'>
                    <img src="/Shape-1.png" className='w-[100px] sm:w-[250px] md:w-[500px] ' alt="" />
                    <img src="/Shape-2.png" alt="" className='w-[100px] sm:w-[250px] md:w-[500px]' />
                </div>
                <img src="/hero.png" className='md:w-[800px] w-[200px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]' alt="" />
            </div>
        </div>
    )
}
