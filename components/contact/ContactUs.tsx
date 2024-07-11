"use client"

import React from 'react';
import { motion } from "framer-motion";
import CustomButton from '../CustomButton';


const ContactUs = () => {
    const onContact = () => {
        console.log('contact')
    }
    return (
        <section className="relative bg-[url('/images/contact-bg.png')] bg-cover bg-center h-[80vh] text-white flex flex-col gap-12 items-center justify-center ">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-[561px]">
                <h1 className='text-5xl font-semibold'>How Can We Help You?</h1>
                <p className='text-lg '>Discover the power of smart budgeting with our app. Optimize your spending, reach your goals faster, and enjoy a more fulfilling life.
                </p>
            </div>
            <CustomButton
                color='primary'
                action={() => console.log('hello')}
                overrideStyle={"z-50"}
            >
                Contact Us
            </CustomButton>
        </section>
    );
}

export default ContactUs;
