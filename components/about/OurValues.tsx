import { ValueCardProp } from '@/types';
import Image from 'next/image';
import React from 'react';
import { integrity, innovation, security, excellence } from '@/public/images';

const OurValues = () => {
    const ValueCard = ({ icon, title, description }: ValueCardProp) => {
        return (
            <article className='flex flex-col items-start gap-4 text-left rounded-3xl bg-white shadow-3xl max-w-[288px]  p-4'>
                <div className='flex items-center justify-center bg-black rounded-full p-2'>
                    <Image src={icon} width={35} height={35} alt='icon' />
                </div>
                <h2 className='font-semibold text-2xl text-black'>{title}</h2>
                <p className='font-normal text-lg text-grey/02'>{description}</p>
            </article>
        )
    }
    return (
        <section className='bg-white text-center flex flex-col items-center justify-center gap-10 my-24'>
            <div className='sm:w-[70vw] md:w-[40vw]'>
                <h1 className='font-semibold text-black text-4xl mb-4'>Our Values</h1>
                <p className='font-medium text-lg text-grey/02  '>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly w-full'>
                <ValueCard
                    icon={integrity}
                    title='Integrity'
                    description='Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis jiimj tugtr . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hi'
                />
                <ValueCard
                    icon={security}
                    title='Security'
                    description='Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis jiimj tugtr . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hi'
                />
                <ValueCard
                    icon={excellence}
                    title='Excellence'
                    description='Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis jiimj tugtr . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hi'
                />
                <ValueCard
                    icon={innovation}
                    title='Innovation'
                    description='Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis jiimj tugtr . Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hi'
                />
            </div>
        </section>
    );
}

export default OurValues;
