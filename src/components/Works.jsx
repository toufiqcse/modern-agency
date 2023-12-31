/* eslint-disable no-unused-vars */
import React from 'react'


export default function Works() {
    return (
        <div className='bg-button md:mt-[100px] mt-[70px]'>
            <div className='px-2 md:px-0 max-w-5xl mx-auto py-7'>
                <div>
                    <p className='text-white capitalize  text-[16px] text-center font-medium'>Whats the function</p>
                    <p className='text-white text-center md:text-4xl text-2xl font-semibold'>Let’s see how it works</p>
                </div>
                <div className='mt-[40px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-20'>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between items-center'>
                            <div className='mr-3 relative'>
                                <div className='bg-white   rounded-3xl px-7 py-7 '></div>
                                <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-button text-3xl font-medium'>01</p>
                            </div>
                            <img className='w-1/2 md:w-full' src="/arrow-down.png" alt="" />
                        </div>
                        <div className='flex flex-col items-start mt-[20px] '>
                            <h4 className='text-white md:text-[22px] text-[15px] font-medium'>Set disbursement
                                Instructions</h4>
                            <p className='mt-4 text-[15px] font-normal text-white'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between items-center'>
                            <div className='mr-3 relative'>
                                <div className='bg-white   rounded-3xl px-7 py-7 '></div>
                                <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-button text-3xl font-medium'>02</p>
                            </div>
                            <img className='w-1/2 md:w-full' src="/arrow-up.png" alt="" />
                        </div>
                        <div className='flex flex-col items-start mt-[20px] '>
                            <h4 className='text-white md:text-[22px] text-[15px] font-medium'>Assembly retrieves funds from your account</h4>
                            <p className='mt-4 text-[15px] font-normal text-white'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between items-center '>
                            <div className='mr-3 relative'>
                                <div className='bg-white   rounded-3xl px-7 py-7 '></div>
                                <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-button text-3xl font-medium'>03</p>
                            </div>
                            <img className='w-1/2 md:w-full' src="/arrow-down.png" alt="" />
                        </div>
                        <div className='flex flex-col items-start mt-[20px] '>
                            <h4 className='text-white md:text-[22px] text-[15px] font-medium'>Assembly initiates disbursement</h4>
                            <p className='mt-4 text-[15px] font-normal text-white'>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between items-center'>
                            <div className='mr-3 relative'>
                                <div className='bg-white   rounded-3xl px-7 py-7 '></div>
                                <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-button text-3xl font-medium'>04</p>
                            </div>

                        </div>
                        <div className='flex flex-col items-start mt-[20px] '>
                            <h4 className='text-white md:text-[22px] text-[15px]font-medium'>Customer receives funds payment</h4>
                            <p className='mt-4 text-[15px] font-normal text-white'>Get your blood tests delivered athome collect a sample from they our blood tests.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
