import React, { useRef, useState } from "react";
import logo from '../../assets/images/Books/book-logo.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const BookTypes = () => {
    return (
        <div className="w-11/12 mx-auto">
            <p className="text-4xl mt-5">Books We Provide</p>
            <p className="mb-5">Select a category</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={8}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-5"
            >
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Romance</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Horror</h1>


                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Thriller</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Suspance</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Novel</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Motivational</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card bg-green-300 duration-700 shadow-lg  relative">
                        {/* <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup> */}
                        <div class="card-body text-justify">
                            <img className="w-[62px] mx-auto" src={logo} alt="book-logo" />
                            <h1 class="tab text-3xl text-gray-700 font-bold">Advanture</h1>
                        </div>
                        <Link class="btn btn-sm font-bold  w-[250px] mx-auto" to='/signUp'>View Books</Link>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default BookTypes;