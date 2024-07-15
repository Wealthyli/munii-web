import React from 'react';
import SeriesCard from './SeriesCard';
import { Post } from '@/types';

interface SeriesBlogCardProp {
  title: string;
  data: Post[];
}

const SeriesBlogCard = ({ title, data }: SeriesBlogCardProp) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>{title}</h1>
      {data.map((blog, index) => {
        return (
          <SeriesCard
            key={index}
            blogImage={blog.mainImageUrl}
            title={blog.title}
            date={new Date(blog.publishedAt).toLocaleDateString()}
          />
        );
      })}
    </div>
  );
}

export default SeriesBlogCard;
