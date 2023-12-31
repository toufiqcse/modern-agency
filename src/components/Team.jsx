/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function Team() {
    return (
        <div className='px-3 md:px-0 mx-auto max-w-5xl md:mt-[100px] mt-[70px]'>
            <div>
                <p className='text-button capitalize  text-[16px] text-center font-medium'>our team</p>
                <p className='text-primary text-center md:text-4xl text-2xl font-semibold'>The most qualified and talented individuals</p>
            </div>
            <div className='my-[40px]'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8'>
                    {/* 1 */}
                    <div className='group hover:shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-1.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className='teamMember'>
                                <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                            </div>
                            <div className='flex flex-col ml-auto hidden group-hover:block hover:text-button group-focus:flex'>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className=' shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-2.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className=''>
                                <p className='text-button text-[22px] font-semibold mb-3'>Lina Jutila</p>
                                <p className='text-[16px] text-button font-normal text-center'>WEB DEVELOPER</p>
                            </div>
                            <div className='flex flex-col ml-auto   text-button'>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='group hover:shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-3.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className='teamMember'>
                                <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                            </div>
                            <div className='flex flex-col ml-auto hidden group-hover:block hover:text-button'>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='group hover:shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-4.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className='teamMember'>
                                <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                            </div>
                            <div className='flex flex-col ml-auto hidden group-hover:block hover:text-button'>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className='group hover:shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-5.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className='teamMember'>
                                <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                            </div>
                            <div className='flex flex-col ml-auto hidden group-hover:block hover:text-button'>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className='group hover:shadow-lg  transition duration-300 cursor-pointer'>
                        <img className='mb-4 mx-auto' src="/user-6.png" alt="" />
                        <div className='flex items-center justify-center transition duration-200'>
                            <div className='teamMember'>
                                <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                            </div>
                            <div className='flex flex-col ml-auto hidden group-hover:block hover:text-button '>
                                <span className='text-2xl mb-2'><FaFacebook /></span>
                                <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                <span className='text-2xl'><FaTwitter /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
