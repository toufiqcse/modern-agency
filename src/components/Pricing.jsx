/* eslint-disable no-unused-vars */
import React from 'react'

export default function Pricing() {
    return (
        <div className='px-3 md:px-0 max-w-5xl mx-auto md:mt-[100px] mt-[70px]'>
            <div>
                <p className='text-button capitalize  text-[16px] text-center font-medium'>Pricing Plan</p>
                <p className='text-primary text-center md:text-4xl text-2xl font-semibold'>Choose your pricing policy</p>
            </div>
            <div className='md:mt-9 mt-4  w-1/2 mx-auto'>
                <div className='flex justify-center items-center bg-[#F7F8FB] p-6 rounded-md '>
                    <button className='outline-none border-none bg-white shadow-md py-5 px-9 rounded-md text-[16px] font-medium text-secondary'>Monthly Plan</button>
                    <button className='outline-none border-none  py-5 px-9 rounded-md text-[16px] font-medium text-secondary'>Annual Plan</button>
                </div>
            </div>
            <div className='mt-9 flex justify-end items-end'>
                <button className='flex justify-between items-center px-4 py-2 rounded-md bg-[#FFA740] text-white text-[16px] font-semibold'>
                    <img src="/logo.png" className='mr-2' alt="" />
                    Suggested</button>
            </div>
            <div className='my-7'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6'>
                    <div className='flex flex-col items-center border border-button rounded-md cursor-pointer'>
                        <div className='my-6'>
                            <h2 className='text-[22px] font-bold text-primary mb-1.5 select-none'>Free Trail</h2>
                            <p className='text-[16px] text-[#343D48] select-none'>For Enterprise business</p>
                        </div>
                        <div>
                            <ul>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Drag & Drop Builder
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    1000 s of Templates
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Blog Support Tools
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    eCommerce Store
                                </li>
                            </ul>
                        </div>
                        <div className='mt-9'>
                            <div className='flex items-center justify-center'>
                                <h1 className='text-primary text-3xl font-medium mr-[4px] text-center'>$0 </h1>
                                <span className='text-[16px] text-[#343D48] text-center'>/Monthly</span>
                            </div>
                        </div>
                        <div className='my-4 '>
                            <button className='outline-none border-none bg-button text-white mt-8 px-[47px] py-[13px] rounded-full'>Start Free Trial</button>

                        </div>
                    </div>
                    {/* proo */}
                    <div className='flex flex-col items-center border border-button rounded-md cursor-pointer'>
                        <div className='my-6'>
                            <h2 className='text-[22px] font-bold text-primary mb-1.5'>Business King</h2>
                            <p className='text-[16px] text-[#343D48]'>For Small teams or office</p>
                        </div>
                        <div>
                            <ul>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Drag & Drop Builder
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    1000 s of Templates
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Blog Support Tools
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    eCommerce Store
                                </li>
                            </ul>
                        </div>
                        <div className='mt-9'>
                            <div className='flex items-center justify-center'>
                                <h1 className='text-primary text-3xl font-medium mr-[4px] text-center'>$15 </h1>
                                <span className='text-[16px] text-[#343D48] text-center'>/Monthly</span>
                            </div>
                        </div>
                        <div className='my-4 flex flex-col items-center'>
                            <button className='outline-none border-none bg-button text-white mt-8 px-[47px] py-[13px] rounded-full'>Create Account</button>
                            <a className='mt-3 text-[#2563FF] text-[16px] font-semibold' href="#">Or Start 14 Days Trial</a>
                        </div>
                    </div>
                    {/* prooo */}
                    <div className='flex flex-col items-center border border-button rounded-md cursor-pointer'>
                        <div className='my-6'>
                            <h2 className='text-[22px] font-bold text-primary mb-1.5'>Pro Master</h2>
                            <p className='text-[16px] text-[#343D48]'>For pro level Developer</p>
                        </div>
                        <div>
                            <ul>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Drag & Drop Builder
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    1000 s of Templates
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    Blog Support Tools
                                </li>
                                <li className='flex justify-start items-center text-[18px] font-medium text-[#343D48] mb-4'>
                                    <img className='mr-3' src="/circle-box.png" alt="" />
                                    eCommerce Store
                                </li>
                            </ul>
                        </div>
                        <div className='mt-9'>
                            <div className='flex items-center justify-center'>
                                <h1 className='text-primary text-3xl font-medium mr-[4px] text-center'>$24 </h1>
                                <span className='text-[16px] text-[#343D48] text-center'>/Monthly</span>
                            </div>
                        </div>
                        <div className='my-4 flex flex-col items-center'>
                            <button className='outline-none border-none bg-button text-white mt-8 px-[47px] py-[13px] rounded-full'>Create Account</button>
                            <a className='mt-3 text-[#2563FF] text-[16px] font-semibold' href="#">Or Start 14 Days Trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
