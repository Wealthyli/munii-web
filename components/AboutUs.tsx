import Image from 'next/image';
import React from 'react';
import { about_us } from '@/public/images';

const AboutUs = () => {
    return (
        <section className='bg-white text-center flex flex-col items-center justify-center gap-8 m-8'>
            <div className='sm:w-[65vw] md:w-[35vw]'>
                <h1 className='font-bold text-black text-lg mb-4'>About Us</h1>
                <p className='font-semibold text-3xl text-grey/02  '>Bringing Your Financial Vision to Life with Expertise</p>
            </div>
            <div>
                <Image src={about_us} width={500} height={500} alt='About Us' />
            </div>
        </section>
    );
}

export default AboutUs;
