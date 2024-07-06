'use client'

import React from 'react';
import Button from './Button';
import { FAQS } from "@/data"
import { FAQCard } from './cards';

const FrequentAskQuestion = () => {

    const onContact = () => {
        console.log("contact")
    }

    return (
        <section className='flex flex-row flex-wrap items-center justify-evenly gap-8 my-12 px-8'>
            <div className='md:max-w-[40vw] w-full'>
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
            <div className='flex flex-col gap-4'>
                {
                    FAQS.map((FAQ) => (
                        < FAQCard key={FAQ.questionText} {...FAQ} />
                    ))
                }
            </div>
        </section>
    );
}

export default FrequentAskQuestion;
