// use client
import React from 'react';
import { CommentCard } from '../cards';
import TextInput from '../TextInput';
import CustomButton from '../CustomButton';

const CommentSection = () => {
    return (
        <section className='mt-8'>
            <h1 className='text-2xl'>Comments (3)</h1>
            <div>
                <CommentCard />
                <CommentCard />
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl'>Post Your Comment</h1>
                <form className='flex flex-col gap-4 mt-8 items-start max-w-[715px]'>
                    <div className='flex sm:flex-row flex-col items-start justify-between gap-4 w-full'>
                        <TextInput
                            placeholder='Enter Your Name Here'
                            overrideStyles={"w-[348px]"}
                        />
                        <TextInput
                            placeholder='Enter Your Email Here'
                            overrideStyles={"w-[348px]"}
                        />
                    </div>
                    <textarea name="" id="" className='w-full h-[192px] border border-border-[#c9c4c4cc] p-4 rounded-3xl' placeholder='Write Your Comment'></textarea>
                    <CustomButton
                        color='default'
                        action={() => console.log('hello')}
                    >
                        Post Comment
                    </CustomButton>
                </form>
            </div>
        </section>
    );
}

export default CommentSection;
