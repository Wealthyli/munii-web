import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';

const Blog = () => {

    return (
        <section className="relative bg-[url('/images/money.png')] bg-cover bg-center h-[85vh] text-white flex flex-col gap-10 items-center justify-center ">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-[520px]">
                <h1 className='text-5xl font-semibold'>Blog</h1>
                <p className='text-lg '>Discover the power of smart budgeting with our app. Optimize your spending, reach your goals faster, and enjoy a more fulfilling life.
                </p>
            </div>
            <div className='relative z-10 w-[95vw] sm:w-[658px] flex items-center justify-center bg-white text-s-text text-lg p-4 rounded-3xl'>
                <input type="text" name="search" id="search" className='bg-inherit w-full outline-none' placeholder='Search' />
                <FaSearchLocation />
            </div>
        </section>
    );
}

export default Blog;
