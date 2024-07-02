import Image from 'next/image';
import React from 'react';
import { jameelah } from '@/public/images';

const CommentCard = () => {
    return (
        <article className='flex flex-row gap-8 items-start max-w-[670px] mt-8'>
            <Image src={jameelah} width={64.63} height={64.63} alt='profile-pics' />
            <div className='flex flex-col gap-4 text-[16px] '>
                <div>
                    <p className='text-xl font-semibold'>Clyde Forland</p>
                    <p>4 months ago</p>
                </div>
                <p>
                    Thanks for how you structured this! It made following the 12; 8; 4 process realThanks for how you structured this! It made following the 12; 8; 4 process really easy to digest.ly easy to digest.
                </p>
                <p>Reply</p>
            </div>
        </article>
    );
}

export default CommentCard;
