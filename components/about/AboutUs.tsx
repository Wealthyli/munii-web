import Image from 'next/image';
import React from 'react';
import { about_us } from '@/public/images';

const AboutUs = () => {
    return (
        <section className="relative bg-[url('/images/about-bg.png')] bg-cover bg-center h-[80vh] text-white flex flex-col gap-12 items-center justify-center ">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-[750px]">
                <p className='text-lg '>About Us</p>
                <h1 className='text-5xl font-semibold'>Empowering Your Financial IQ, One Insight at a Time</h1>
            </div>
        </section>
    );
}

export default AboutUs;
