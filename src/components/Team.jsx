/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
// import required modules
import '../components/styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
export default function Team() {
    return (
        <div className='px-3 md:px-0 mx-auto max-w-5xl md:mt-[100px] mt-[70px]'>
            <div>
                <p className='text-button capitalize  text-[16px] text-center font-medium'>our team</p>
                <p className='text-primary text-center md:text-4xl text-2xl font-semibold'>The most qualified and talented individuals</p>
            </div>
            <div className='my-[40px] '>
                <div className=' '>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        cssMode={true}
                        freeMode={true}

                        autoplay={{
                            delay: 1000,

                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            {/* 1 */}
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-1.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* 2 */}
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-2.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* 3 */}
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-3.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-4.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* 5 */}
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-5.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* 6 */}
                            <div className='p-2 flex flex-col items-center  shadow-lg  transition duration-300 cursor-pointer'>
                                <img className='w-[100px]' src="/user-6.png" alt="" />
                                <div className='flex items-center justify-center transition duration-200 '>
                                    <div className='teamMember '>
                                        <p className='text-primary text-[22px] font-semibold mb-3'>Aaron Nunez</p>
                                        <p className='text-[16px] text-[#343D48] text-center font-normal'>WEB Designer</p>
                                    </div>
                                    <span className='mx-6'></span>
                                    <div className='flex flex-col   hover:text-button group-focus:flex'>
                                        <span className='text-2xl mb-2'><FaFacebook /></span>
                                        <span className='text-2xl mb-2'><FaInstagramSquare /></span>
                                        <span className='text-2xl'><FaTwitter /></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>







                </div>
            </div>
        </div>
    )
}
