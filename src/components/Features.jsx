/* eslint-disable no-unused-vars */
import React from 'react'

export default function Features() {
    return (
        <div className='md:mt-[100px] mt-[50px] max-w-5xl mx-auto px-3 md:px-0'>
            <h1 className='text-button text-center font-semibold text-[16px]   mx-auto capitalize'>Whats the function</h1>
            <p className='text-secondary text-center text-3xl font-semibold'>Meet the feature of product</p>

            <div className='md:mt-[90px] mt-[40px]'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5'>
                    <div className='flex flex-col items-center justify-start'>
                        <img src="/Group-3.png" alt="" />
                        <h3 className='text-primary text-[18px] font-semibold mb-8'>Fast Performance</h3>
                        <p className='text-secondary opacity-70 text-[15px] font-medium'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                        <img src="/Group-1.png" alt="" />
                        <h3 className='text-primary text-[18px] font-semibold mb-8'>Partnership deal</h3>
                        <p className='text-secondary opacity-70 text-[15px] font-medium'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                        <img src="/Group-2.png" alt="" />
                        <h3 className='text-primary text-[18px] font-semibold mb-8'>Pro Subscription</h3>
                        <p className='text-secondary opacity-70 text-[15px] font-medium'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                        <img src="/Group-3.png" alt="" />
                        <h3 className='text-primary text-[18px] font-semibold mb-8'>Customer care</h3>
                        <p className='text-secondary opacity-70 text-[15px] font-medium'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
