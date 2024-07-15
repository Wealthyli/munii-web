import React from 'react';
import Image from 'next/image';
import { doe } from '@/public/images';

interface CommentCardProps {
  name: string;
  date: string; 
  comment: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ name, date, comment }) => {
  return (
    <article className='flex flex-row gap-8 items-start max-w-[670px] mt-8'>
      <Image src={doe} width={64.63} height={64.63} alt='profile-pics' />
      <div className='flex flex-col gap-4 text-[16px] '>
        <div>
          <p className='text-xl font-semibold'>{name}</p>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
        <p>{comment}</p>
      </div>
    </article>
  );
}

export default CommentCard;
