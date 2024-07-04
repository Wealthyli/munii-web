import Image from 'next/image';
import React from 'react';
import { jameelah } from '@/public/images';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <article className='flex flex-row gap-8 items-start max-w-[900px] mt-8'>
            <Image src={jameelah} width={110} height={110} alt='profile pics' />
            <div className='flex flex-col gap-4 '>
                <div>
                    <h1 className='text-2xl'>jameela adeniran</h1>
                    <p className='text-[16px]'>Author</p>
                </div>
                <p className='text-lg'>
                    Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.
                </p>
                <div className='flex gap-4'>
                    <div className='border border-black p-2 rounded-full text-black' >
                        <FaFacebookF />
                    </div>
                    <div className='border border-black p-2 rounded-full text-black' >
                        <FaLinkedinIn />
                    </div>
                    <div className='border border-black p-2 rounded-full text-black' >
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProfileCard;
