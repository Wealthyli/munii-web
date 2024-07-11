import { Select } from '@chakra-ui/react';
import React from 'react';
import { BlogPostCard } from '../cards';
import { blogPost } from '@/data';
import TopReadBlog from './TopReadBlog';

const BlogPost = () => {
    return (
        <>
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
                <div className='my-8 flex flex-wrap gap-4 items-center justify-evenly'>
                    {blogPost.map((blog) => {
                        return (
                            <BlogPostCard key={blog.id} {...blog} />
                        )
                    })}
                </div>
            </section>
            <TopReadBlog />
        </>
    );
}

export default BlogPost;
