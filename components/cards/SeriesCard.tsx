import { SeriesCardProp } from '@/types';
import Image from 'next/image';
import React from 'react';

const SeriesCard = ({ blogImage, title, date }: SeriesCardProp) => {
    return (
        <article className='flex flex-row gap-4 items-start justify-center max-w-[340px] '>
            <Image src={blogImage} width={144} height={100} alt='blog' className='rounded-xl' />
            <div className='flex flex-col gap-4'>
                <p className='text-lg'>{title}</p>
                <p className='text-sm text-s-text'>{date}</p>
            </div>
        </article>
    );
}

export default SeriesCard;
