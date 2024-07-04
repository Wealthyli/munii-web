import { BlogPostProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogPostCard = ({
    id,
    title,
    category,
    coverImage,
    coverText,
    authorName,
    authorAvatar,
    date,
    shareCount,
}: BlogPostProp
) => {
    return (
        <article className='max-w-[385px] flex flex-col gap-4'>
            <Image src={coverImage} width={385} height={336} alt='blog post' className='rounded-xl' />
            <h1 className='text-2xl font-medium'>{title}</h1>
            <div className='flex items-center justify-between '>
                <div className='flex gap-2'>
                    <Image src={authorAvatar} width={28} height={28} alt='avatar' className='rounded-full' />
                    <p className='text-lg font-medium'>{authorName}</p>
                </div>
                <div className='flex gap-2 text-sm'>
                    <p>{date}</p>
                    <Image src={"/images/shareIcon.svg"} width={16} height={16} alt='blog post' className='rounded-xl' />
                    <p>{shareCount} shares</p>
                </div>
            </div>
            <p>
                {coverText}
            </p>
            <Link href={`/blog/${id}`} className='self-end border-b border-b-black'>View Post</Link>
        </article>
    );
}

export default BlogPostCard;
