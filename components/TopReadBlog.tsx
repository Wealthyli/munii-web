import React from 'react';
import Image from 'next/image';
import { topReadPost } from '@/data';
import { Select } from '@chakra-ui/react';
import { SeriesBlogCard } from './cards';
import Link from 'next/link';
import NewsLetter from './NewsLetter';

const TopReadBlog = () => {
    return (
        <section className='px-4 lg:px-[5rem] md:py-[1.5rem]'>
            <div className='flex flex-col md:flex-row justify-between gap-4 '>
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
                    <SeriesBlogCard data={topReadPost} />
                </div>
            </div>
            <NewsLetter />
        </section>

    );
}

export default TopReadBlog;
