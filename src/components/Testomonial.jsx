/* eslint-disable no-unused-vars */
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css';
import '../components/styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function Testomonial() {
    return (
        <div className='max-w-5xl mx-auto px-3 md:px-0 md:mt-[100px] mt-[70px]'>
            <div>
                <p className='text-button capitalize  text-[16px] text-center font-medium'>TESTIMONIAL</p>
                <p className='text-primary text-center md:text-4xl text-2xl font-semibold'>Meet Client Satisfaction</p>
            </div>
            <div className='md:mt-[60px] mt-[30px]   items-start justify-start  md:px-0'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
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
                        <div className='my-7 flex flex-col items-start justify-start'>
                            <div className='flex text-[25px] text-button mb-1.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <IoIosStarOutline />
                            </div>
                            <div className='mb-7'>
                                <h3 className='text-[#343D48] text-[16px] font-semibold mb-4 text-start'>Modern look & trending design</h3>
                                <p className='text-[#343D48] text-[18px] font-normal leading-9 text-justify'>Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.</p>
                            </div>
                            <div className='flex justify-between items-start mb-8'>
                                <img src="/user-1.png" alt="" />
                                <div className='flex flex-col w-full ms-4'>
                                    <h4 className='text-primary text-[16px] font-semibold text-start'>Lina Andy</h4>
                                    <p className='text-button text-[15px] font-medium'>@lina.an</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='my-7 flex flex-col items-start justify-start'>
                            <div className='flex text-[25px] text-button mb-1.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <IoIosStarOutline />
                            </div>
                            <div className='mb-7'>
                                <h3 className='text-[#343D48] text-[16px] font-semibold mb-4 text-start'>Modern look & trending design</h3>
                                <p className='text-[#343D48] text-[18px] font-normal leading-9 text-justify'>Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.</p>
                            </div>
                            <div className='flex justify-between items-start mb-8'>
                                <img src="/user-2.png" alt="" />
                                <div className='flex flex-col w-full ms-4'>
                                    <h4 className='text-primary text-[16px] font-semibold text-start'>Lina Andy</h4>
                                    <p className='text-button text-[15px] font-medium'>@lina.an</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='my-7 flex flex-col items-start justify-start'>
                            <div className='flex text-[25px] text-button mb-1.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <IoIosStarOutline />
                            </div>
                            <div className='mb-7'>
                                <h3 className='text-[#343D48] text-[16px] font-semibold mb-4 text-start'>Modern look & trending design</h3>
                                <p className='text-[#343D48] text-[18px] font-normal leading-9 text-justify'>Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.</p>
                            </div>
                            <div className='flex justify-between items-start mb-8'>
                                <img src="/user-3.png" alt="" />
                                <div className='flex flex-col w-full ms-4'>
                                    <h4 className='text-primary text-[16px] font-semibold text-start'>Lina Andy</h4>
                                    <p className='text-button text-[15px] font-medium'>@lina.an</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='my-7 flex flex-col items-start justify-start'>
                            <div className='flex text-[25px] text-button mb-1.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <IoIosStarOutline />
                            </div>
                            <div className='mb-7'>
                                <h3 className='text-[#343D48] text-[16px] font-semibold mb-4 text-start'>Modern look & trending design</h3>
                                <p className='text-[#343D48] text-[18px] font-normal leading-9 text-justify'>Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.</p>
                            </div>
                            <div className='flex justify-between items-start mb-8'>
                                <img src="/user-4.png" alt="" />
                                <div className='flex flex-col w-full ms-4'>
                                    <h4 className='text-primary text-[16px] font-semibold text-start'>Lina Andy</h4>
                                    <p className='text-button text-[15px] font-medium'>@lina.an</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}
