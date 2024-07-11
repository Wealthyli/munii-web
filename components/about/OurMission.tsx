import Image from 'next/image';
import React from 'react';
import { mission } from '@/public/images';

const OurMission = () => {
    return (
        <section className='bg-[#CAFF011A] text-center flex flex-row flex-wrap items-center justify-evenly px-4 py-8 my-12 gap-4 shadow-missionShadow'>
            <article className='flex sm:flex-row items-center justify-center bg-white rounded-3xl gap-4 p-4 max-w-[590px] shadow-2xl flex-col'>
                <Image src={mission} width={253} height={236} alt='About Us' />
                <div className='text-left'>
                    <h2 className='font-medium text-lg mb-2 text-black'>Our Mission </h2>
                    <p className='font-normal text-base text-grey/02'>
                        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </article>
            <article className='flex sm:flex-row items-center justify-center bg-white rounded-3xl gap-4 p-4 max-w-[590px] shadow-2xl flex-col'>
                <Image src={mission} width={253} height={236} alt='About Us' />
                <div className='text-left'>
                    <h2 className='font-medium text-lg mb-2 text-black'>Our Vision</h2>
                    <p className='font-normal text-base text-grey/02'>
                        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default OurMission;
