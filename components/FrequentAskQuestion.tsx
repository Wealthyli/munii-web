'use client'

import React from 'react';
import Button from './Button';
import { BiChevronDown } from 'react-icons/bi';

const FrequentAskQuestion = () => {

    const onContact = () => {
        console.log("contact")
    }

    return (
        <section className='flex flex-row flex-wrap items-center justify-evenly gap-8 my-12 px-8'>
            <div className='w-[40vw]'>
                <h1 className='mb-6 text-3xl text-grey/02 font-bold'>Frequently Asked <br /> Questions</h1>
                <p className='mb-6 text-lg text-grey/02'>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                </p>
                <Button
                    btnName='Contact Us'
                    onclick={onContact}
                    className={"rounded-full"}
                />
            </div>
            <ul className='flex flex-col gap-4'>
                <li className='flex flex-row  items-center justify-between border border-grey/02 rounded-full px-8 py-4 w-[40vw] text-grey/02'>
                    <p className='whitespace-nowrap text-lg '>How do I get started on your platform?</p>
                    <BiChevronDown />
                </li>
                <li className='flex flex-row  items-center justify-between border border-grey/02 rounded-full px-8 py-4 w-[40vw] text-grey/02'>
                    <p className='whitespace-nowrap text-lg '>How do I get started on your platform?</p>
                    <BiChevronDown />
                </li>
                <li className='flex flex-row  items-center justify-between border border-grey/02 rounded-full px-8 py-4 w-[40vw] text-grey/02'>
                    <p className='whitespace-nowrap text-lg '>How do I get started on your platform?</p>
                    <BiChevronDown />
                </li>
                <li className='flex flex-row  items-center justify-between border border-grey/02 rounded-full px-8 py-4 w-[40vw] text-grey/02'>
                    <p className='whitespace-nowrap text-lg '>How do I get started on your platform?</p>
                    <BiChevronDown />
                </li>
                <li className='flex flex-row  items-center justify-between border border-grey/02 rounded-full px-8 py-4 w-[40vw] text-grey/02'>
                    <p className='whitespace-nowrap text-lg '>How do I get started on your platform?</p>
                    <BiChevronDown />
                </li>
            </ul>
        </section>
    );
}

export default FrequentAskQuestion;
