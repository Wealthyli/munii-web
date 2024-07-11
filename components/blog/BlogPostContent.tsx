import Image from 'next/image';
import React from 'react';
import {
    clock,
    view,
    facebook,
    pinterest,
    twitter,
    linkdin
} from "@/public/images"
import TextInput from '../TextInput';
import CustomButton from '../CustomButton';
import { ProfileCard, SeriesBlogCard } from '../cards';
import { topReadPost, blogPost } from '@/data';
import { BlogPostProp } from '@/types';
import CommentSection from './CommentSection';



const BlogPostContent = ({
    id = 1,
}: BlogPostProp) => {

    const post = blogPost.find((blog) => id === blog.id)

    return (
        <section>
            {post ? (
                <>
                    <div className={`relative bg-cover bg-center h-[80vh] text-white flex flex-col gap-10 items-start px-4 lg:px-[5rem] md:py-[1.5rem] justify-center`}
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60" />
                        <div className="relative z-10 flex flex-col gap-4 text-left max-w-[570px]">
                            <h1 className='text-5xl font-semibold'>{post.title}</h1>
                            <p className='text-lg '>{post.coverText} </p>
                        </div>
                        <div className='flex flex-wrap items-center justify-center gap-4 text-[16px] z-10'>
                            <p className='text-[20px]'>by {post.authorName}</p>
                            <div className='w-[20px] h-[1px] bg-s-text'></div>
                            <div className='flex gap-2'><Image src={clock} width={14} height={14} alt='blog' /> <span> {post.readTime} read</span></div>
                            <div className='w-[20px] h-[1px] bg-s-text'></div>
                            <div className='flex gap-2'><Image src={view} width={12} height={12} alt='blog' /> <span>{post.viewCount} views</span></div>
                            <div className='w-[20px] h-[1px] bg-s-text'></div>
                            <div className='flex gap-2'>
                                <Image src={facebook} width={16} height={16} alt='blog' />
                                <Image src={twitter} width={16} height={16} alt='blog' />
                                <Image src={pinterest} width={16} height={16} alt='blog' />
                                <span>{post.shareCount} shares</span>
                            </div>
                        </div>
                    </div>
                    <div className=' p-4 lg:px-[5rem] md:py-[4rem] justify-center '>
                        <div className='flex md:flex-row flex-col gap-6 w-full'>
                            <div className='flex flex-col gap-6 w-full md:w-[75%]'>
                                <p className='text-[16px] tracking-wide leading-loose justify-text'>
                                    {post.blogContent}
                                </p>
                                <div className='flex flex-row flex-wrap gap-2'>
                                    <p className='text-center text-2xl'>{post.shareCount}<br /><span className='text-lg text-grey/02'>Shares</span></p>
                                    <CustomButton
                                        action={() => console.log('hello')}
                                        // color='default'
                                        overrideStyle="flex items-center justify-center gap-4 bg-[#3B5998] text-white font-normal sm:w-[24vw] w-full rounded-2xl p-4"
                                    >
                                        <Image src={facebook} width={24} height={24} alt='blog' />
                                        Shares {post.faceBookCount}
                                    </CustomButton>
                                    <CustomButton
                                        action={() => console.log('hello')}
                                        // color='default'
                                        overrideStyle="flex items-center justify-center gap-4 bg-[#FF0000] text-white font-normal w-full sm:w-[24vw] rounded-2xl p-4"
                                    >
                                        <Image src={pinterest} width={24} height={24} alt='blog' />
                                        Shares {post.pinterestCount}
                                    </CustomButton>
                                    <CustomButton
                                        action={() => console.log('hello')}
                                        // color='default'
                                        overrideStyle="flex items-center justify-center gap-4 bg-[#007BB6] w-full sm:w-[9vw] text-white font-normal rounded-2xl p-4"
                                    >
                                        <Image src={linkdin} width={24} height={24} alt='blog' />
                                        {post.linkDlnCount}
                                    </CustomButton>
                                </div>
                                <ProfileCard />
                                <CommentSection />
                            </div>
                            <div className='flex flex-col w-full md:w-[25%] gap-4'>
                                <p className='text-lg'>Subscribe to our newsletter and receive a selection of cool articles every weeks
                                </p>
                                <TextInput
                                    placeholder='Enter your email'
                                    overrideStyles="w-full"
                                />
                                <CustomButton
                                    action={() => console.log('hello')}
                                    color='default'
                                >
                                    Submit
                                </CustomButton>
                                <div className='flex gap-4 items-baseline justify-start'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='text-s-text text-[16px]'>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
                                </div>
                                <SeriesBlogCard data={topReadPost} title={"Related poSt"} />
                            </div>
                        </div>
                    </div>
                </>) : ""}
        </section>
    );
}

export default BlogPostContent;
