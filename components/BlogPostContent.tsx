import Image from 'next/image';
import React from 'react';
import { clock, view, facebook, pinterest, twitter } from "@/public/images"
import TextInput from './ui/ReUableInput/TextInput';
import CustomButton from './ui/custom-buttton/CustomButton';
import { SeriesCard } from './cards';
import { topReadPost } from '@/data';
import { BlogPostProp } from '@/types';



const BlogPostContent = ({
    slug,
    title,
    coverText,
    authorName,
    readTime,
    viewCount,
    shareCount,
    blogContent,
    faceBookCount,
    pinterestCount,
    linkDlnCount,

}: BlogPostProp) => {
    return (
        <section>
            <div className="relative bg-[url('/images/money.png')] bg-cover bg-center h-[85vh] text-white flex flex-col gap-10 items-start px-4 lg:px-[5rem] md:py-[1.5rem] justify-center ">
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="relative z-10 flex flex-col gap-4 text-left max-w-[570px]">
                    <h1 className='text-5xl font-semibold'>{title}</h1>
                    <p className='text-lg '>{coverText} </p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-4 text-[16px] z-10'>
                    <p className='text-[20px]'>by {authorName}</p>
                    <div className='w-[20px] h-[1px] bg-s-text'></div>
                    <div className='flex gap-2'><Image src={clock} width={14} height={14} alt='blog' /> <span> {readTime} read</span></div>
                    <div className='w-[20px] h-[1px] bg-s-text'></div>
                    <div className='flex gap-2'><Image src={view} width={12} height={12} alt='blog' /> <span>{viewCount} views</span></div>
                    <div className='w-[20px] h-[1px] bg-s-text'></div>
                    <div className='flex gap-2'>
                        <Image src={facebook} width={16} height={16} alt='blog' />
                        <Image src={twitter} width={16} height={16} alt='blog' />
                        <Image src={pinterest} width={16} height={16} alt='blog' />
                        <span>{shareCount} shares</span>
                    </div>
                </div>
            </div>
            <div className=' p-4 lg:px-[5rem] md:py-[4rem] justify-center'>
                <div className='flex md:flex-row flex-col gap-6'>
                    <div className='flex flex-col gap-6'>
                        <p className='text-[16px] tracking-wide leading-loose'>
                            {blogContent}
                        </p>
                        <div className='flex flex-row flex-wrap gap-2'>
                            <p className='text-center text-2xl'>{shareCount}<br /><span className='text-lg text-grey/02'>Shares</span></p>
                            <CustomButton
                                overrideStyle={"bg-[#3B5998] text-white flex gap-2 items-center justify-center w-[320px] max-w-[320px] rounded-[20px]"}
                            >
                                <Image src={facebook} width={24} height={24} alt='blog' />
                                Shares {faceBookCount}
                            </CustomButton>
                            <CustomButton
                                overrideStyle={"bg-[#FF0000] text-white flex gap-2 items-center justify-center w-[320px]  max-w-[320px] rounded-[20px]"}
                            >
                                <Image src={pinterest} width={24} height={24} alt='blog' />
                                Shares {pinterestCount}
                            </CustomButton>
                            <CustomButton
                                overrideStyle={"bg-[#007BB6] text-white flex gap-2 items-center justify-center w-[120px]  max-w-[320px] rounded-[20px]"}
                            >
                                <Image src={twitter} width={24} height={24} alt='blog' />
                                {linkDlnCount}
                            </CustomButton>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-lg'>Subscribe to our newsletter and receive a selection of cool articles every weeks
                        </p>
                        <TextInput
                            placeholder='Enter your email'
                        />
                        <CustomButton
                            overrideStyle="bg-black text-primary text-lg font-semibold w-full rounded-2xl p-4"

                        >
                            Submit
                        </CustomButton>
                        <div className='flex gap-4 items-baseline justify-start'>
                            <input type="checkbox" name="" id="" />
                            <p className='text-s-text text-[16px]'>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-2xl'>Related Post</h1>
                            {topReadPost.map((blog, index) => {
                                return (
                                    <SeriesCard key={index} {...blog} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
}

export default BlogPostContent;
