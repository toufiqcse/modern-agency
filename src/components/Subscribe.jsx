/* eslint-disable no-unused-vars */
import React from 'react'

export default function Subscribe() {
    return (
        <div className='mx-auto max-w-5xl px-3 md:px-0 md:my-[100px] my-[70px]'>
            <div className='bg-button rounded-md py-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-white md:text-4xl text-2xl font-semibold mb-5 px-2'>Subscribe to our Blog</h2>
                    <p className='text-[14px] text-white max-w-md mx-auto text-center leading-6 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat itaque pariatur veniam neque veritatis earum expedita eligendi. Cumque, rerum.</p>
                    <form action="#" className='md:relative  md:w-1/2 px-2'>
                        <input type="email" name="email" placeholder='Enter your email' className='ps-7 py-[18px] text-button font-medium text-[16px] placeholder:text-button outline-none border-none rounded-full md:w-full w-full ' id="" autoComplete="true" />
                        <input className='md:absolute md:top-[50%] md:translate-y-[-50%] md:right-4 md:bg-button  px-10 py-3 rounded-full text-primary bg-white mt-2 md:mt-0 md:text-white font-medium text-[16px] outline-none border-none cursor-pointer' type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
            {/* community */}
            <div className='my-[50px] '>
                <div className='flex flex-wrap md:flex-nowrap justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <img src="/message.png" alt="" />
                        <h3 className='text-primary text-[19px] font-semibold mb-4'>Join the Community</h3>
                        <p className='text-secondary text-[15px] font-normal text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, est obcaecati consectetur

                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/user.png" alt="" />
                        <h3 className='text-primary text-[19px] font-semibold mb-4'>Join the Community</h3>
                        <p className='text-secondary text-[15px] font-normal text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, est obcaecati consectetur

                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/git.png" alt="" />
                        <h3 className='text-primary text-[19px] font-semibold mb-4'>Join the Community</h3>
                        <p className='text-secondary text-[15px] font-normal text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, est obcaecati consectetur

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
