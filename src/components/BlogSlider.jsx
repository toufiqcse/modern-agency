/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
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
export default function BlogSlider() {
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-5xl px-3 md:px-0 md:mt-[100px] mt-[70px]'>
                <div className='mb-12'>
                    <p className='text-button capitalize  text-[16px] text-center font-medium'>OUR BLOG</p>
                    <p className='text-primary text-center md: text-2xl font-semibold'>Explore our products for your  <br /> business solution</p>
                </div>
                <div className='  '>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        cssMode={true}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
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
                            <div className='mb-8 '>
                                <img src="/blog-1.png" alt="" />
                                <div className='py-5 px-4 justify-start items-start'>
                                    <h3 className='text-primary text-xl font-semibold'>Product marketing: Creative Market</h3>

                                    <div className='mt-3  justify-between flex items-center'>
                                        <p className='text-button text-[18px] font-medium'>James Carter</p>
                                        <p>Sep 20, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mb-8'>
                                <img src="/blog-2.png" alt="" />
                                <div className='py-5 px-4 justify-start items-start'>
                                    <h3 className='text-primary text-xl font-semibold'>Product marketing: Creative Market</h3>
                                    <div className='mt-3  justify-between flex items-center'>
                                        <p className='text-button text-[18px] font-medium'>James Carter</p>
                                        <p>Sep 20, 2019</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mb-8'>
                                <img src="/blog-3.png" alt="" />
                                <div className='py-5 px-4 justify-start items-start'>
                                    <h3 className='text-primary text-xl font-semibold'>Product marketing: Creative Market</h3>
                                    <div className='mt-3  justify-between flex items-center'>
                                        <p className='text-button text-[18px] font-medium'>James Carter</p>
                                        <p>Sep 20, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mb-8'>
                                <img src="/blog-1.png" alt="" />
                                <div className='py-5 px-4 justify-start items-start'>
                                    <h3 className='text-primary text-xl font-semibold'>Product marketing: Creative Market</h3>
                                    <div className='mt-3  justify-between flex items-center'>
                                        <p className='text-button text-[18px] font-medium'>James Carter</p>
                                        <p>Sep 20, 2019</p>
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
