"use client"

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import { Contact } from '@/public/images';
import { motion } from "framer-motion";


const ContactUs = () => {
    const onContact = () => {
        console.log('contact')
    }
    return (
        <section className=" flex flex-col md:flex-col lg:flex-row px-4 lg:px-[5rem] items-center gap-8 lg:justify-between text-white w-full bg-black py-16">
            {/* <motion.div
                initial={{ opacity: 0 }}
                // whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center lg:items-stretch w-full lg:max-w-[45%]"
            > */}
            <article>
                <div>
                    <h1 className='text-5xl font-semibold mb-4'>How Can We Help You?</h1>
                    <p className="text-lg md:text-[18px] mt-4 lg:max-w-[31rem] text-center lg:text-left mb-12">Discover the power of smart budgeting with our app. Optimize your spending, reach your goals faster, and enjoy a more fulfilling life.</p>
                </div>
                <Button
                    btnName='Contact Us'
                    onclick={onContact}
                    className={"bg-primary"}
                />
            </article>
            {/* </motion.div> */}
            {/* <motion.div 
                initial={{ opacity: 0 }}
                // whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="hidden lg:flex md:max-w-[60%] mt-8 md:mt-0"      >*/}
            <Image src={Contact} width={607} height={448} alt='contact us' />
            {/* </motion.div> */}
        </section>
    );
}

export default ContactUs;
