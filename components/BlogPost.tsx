import { Select } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BlogPostCard, SeriesCard } from './cards';
import { blogPost, topReadPost } from '@/data';
import NewsLetter from './NewsLetter';

const BlogPost = () => {
    return (
        <section className='p-4 lg:px-[5rem] md:py-[1.5rem]'>
            <nav className="flex items-center justify-between w-full ">
                <h1 className='text-4xl font-medium '>Latest Articles</h1>
                <ul className='hidden md:flex gap-4 text-lg '>
                    <li>Savings</li>
                    <li>Budgeting</li>
                    <li>Investment</li>
                    <li>Banking</li>
                    <li>AI Finance</li>
                </ul>
                <Select
                    w="147px"
                    h="48px"
                    rounded="12px"
                    borderColor="rgba(85, 85, 85, 0.2)"
                    focusBorderColor="rgba(85, 85, 85, 0.2)"
                    placeholder="Latest"
                ></Select>
            </nav>
            <div className='my-8 flex flex-wrap gap-4 items-center justify-center'>
                {blogPost.map((blog, index) => {
                    return (
                        <BlogPostCard key={index} {...blog} />
                    )
                })}
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-4xl font-semibold'>Top Reads</h1>
                    <article className='max-w-[804px] flex flex-col gap-4'>
                        <Image src="/images/top read.png" width={804} height={336} alt='blog post' className='rounded-xl' />
                        <p>1 Month Ago </p>
                        <h1 className='text-2xl font-medium'>Qorem ipsum dolor sit amet, consecteturQorem ipsum dolor sit amet, consectetur Qorem ipsum dolor sit amet, consectetur</h1>
                        <p className='text-sm text-s-text'>
                            lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.
                        </p>
                        <Link href="/" className='self-end border-b border-b-black'>View Post</Link>
                    </article>
                </div>
                <div className='flex flex-col gap-8'>
                    <Select
                        w="147px"
                        h="48px"
                        alignSelf="end"
                        rounded="12px"
                        borderColor="rgba(85, 85, 85, 0.2)"
                        focusBorderColor="rgba(85, 85, 85, 0.2)"
                        placeholder="See All"
                    ></Select>
                    <div className='flex flex-col gap-4'>
                        {topReadPost.map((blog, index) => {
                            return (
                                <SeriesCard key={index} {...blog} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <NewsLetter />
        </section>
    );
}

export default BlogPost;
