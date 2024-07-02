import React from 'react';
import { CommentCard } from './cards';
import TextInput from './ui/ReUableInput/TextInput';
import CustomButton from './ui/custom-buttton/CustomButton';

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
                <form className='flex flex-col gap-4 mt-8 items-start'>
                    <div className='flex gap-4'>
                        <TextInput />
                        <TextInput />
                    </div>
                    <textarea name="" id=""></textarea>
                    <CustomButton>
                        Post Comment
                    </CustomButton>
                </form>
            </div>
        </section>
    );
}

export default CommentSection;
