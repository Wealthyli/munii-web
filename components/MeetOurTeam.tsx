'use client'

import Image from 'next/image';
import React from 'react';
import { MemberCardProp } from '@/types';
import { teamMembers } from '@/data';
import Button from './Button';

const MeetOurTeam = () => {
    const TeamMember = ({ name, title, image }: MemberCardProp) => {
        return (
            <article className='w-[150px] flex flex-col gap-2'>
                <div className='bg-grey/02 rounded-full w-full h-[150px]'>
                    <Image src={image} alt={name} width={150} height={150} />
                </div>
                <div>
                    <h3 className='text-lg mb-1'>{name}</h3>
                    <p className='text-sm'>{title}</p>
                </div>
            </article>
        );
    }

    const onView = () => {
        console.log("view")
    }

    return (
        <section className='text-center flex flex-col items-center gap-4 my-8'>
            <div className='sm:w-[70vw] md:w-[40vw]'>
                <h1 className='mb-4 font-semibold text-4xl text-black'>Meet Our Dedicated Team</h1>
                <p className='font-medium text-lg text-grey/02 '>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-4 justify-evenly items-center w-screen justify-items-center'>
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
            <Button
                btnName='View All'
                onclick={onView}
                className={"rounded-full"}
            />
        </section>
    );
}

export default MeetOurTeam;
