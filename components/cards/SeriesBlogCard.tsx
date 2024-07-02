import React from 'react';
import SeriesCard from './SeriesCard';
import { topReadPost } from '@/data';
import { SeriesBlogCardProp } from '@/types';

const SeriesBlogCard = ({ title, data }: SeriesBlogCardProp) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl'>Related Post</h1>
            {topReadPost.map((blog, index) => {
                return (
                    <SeriesCard key={index} {...blog} />
                )
            })}
        </div>
    );
}

export default SeriesBlogCard;
