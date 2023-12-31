/* eslint-disable no-unused-vars */
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mx-auto max-w-5xl px-3 md:px-0 mb-2 md:mt-[100px] mt-[70px]'>
            <div className='flex justify-center items-center'>
                <a href={"/"} className="md:text-xl  text-[16px] opacity-80 font-bold text-design  flex items-center text-secondary">
                    <img src="/logo.png" alt="" className="mr-2" />
                    <p>Fast Tech IT </p>
                </a>
            </div>
            <div className='my-5'>
                {/* <div className='flex justify-center items-center'>
                    <a href="#" className='text-secondary text-[17px] font-normal mr-6'>Home</a>
                    <a href="#" className='text-secondary text-[17px] font-normal mr-6'>Advertise</a>
                    <a href="#" className='text-secondary text-[17px] font-normal mr-6'>Supports</a>
                    <a href="#" className='text-secondary text-[17px] font-normal mr-6'>Marketing</a>
                    <a href="#" className='text-secondary text-[17px] font-normal '>Contact</a>
                </div> */}
            </div>
            <p className='text-center text-secondary opacity-90'>Copyright {currentYear} By Friends IT Solution </p>
        </div>
    )
}
