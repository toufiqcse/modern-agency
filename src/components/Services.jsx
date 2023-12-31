/* eslint-disable no-unused-vars */
import React from 'react'

export default function Services() {



    return (
        <div className='md:mt-[100px] mt-[70px] max-w-5xl mx-auto px-3 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className=' relative'>
                    <img className='' src="/service.png" alt="" />

                    <span className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.4" cx="49.9998" cy="50" r="50" fill="white" />
                        </svg>
                    </span>
                    <img src="/play-button.png" className='absolute top-[50%] left-[50%] translate-y-[-50%] cursor-pointer translate-x-[-50%]' alt="" />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-button capitalize mb-4 text-[16px] font-semibold'>Our services</p>
                    <h2 className='text-primary md:text-4xl text-2xl font-semibold mb-[50px]'>Business Goals
                        Achieved with Design</h2>
                    <div className=' flex md:mb-[40px] mb-[30px]'>
                        <img src="/Group-2.png" className='mr-2' alt="" />
                        <div className='flex flex-col '>
                            <p className='text-primary text-[18px] font-semibold mb-3'>Smart Features</p>
                            <p className='text-[#343D48] text-[15px] font-normal leading-8'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                        </div>
                    </div>
                    <div className=' flex'>
                        <img src="/Group-3.png" className='mr-2' alt="" />
                        <div className='flex flex-col '>
                            <p className='text-primary text-[18px] font-semibold mb-3'>Secure Contents</p>
                            <p className='text-[#343D48] text-[15px] font-normal leading-8'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
