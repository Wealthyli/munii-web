'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { MemberCardProp } from '@/types';
import { teamMembers } from '@/data';
import CustomButton from '../CustomButton';

const MeetOurTeam = () => {
    const [showAllMember, setShowAllMember] = useState(8)

    const onView = () => {
        console.log("view")
    }

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


    return (
        <section className='text-center flex flex-col items-center gap-4 my-8 px-4'>
            <div className='sm:w-full md:w-[550px]'>
                <h1 className='mb-4 font-semibold text-4xl text-black'>Meet Our Dedicated Team</h1>
                <p className='font-medium text-lg text-grey/02 '>
                    Meet our team of experts who are committed to making your financial journey more secure and prosperous.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-evenly items-center w-full justify-items-center'>
                {teamMembers.slice(0, 8).map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
            <CustomButton
                action={onView}
                color='default'
            >
                View All
            </CustomButton>
        </section>
    );
}

export default MeetOurTeam;
