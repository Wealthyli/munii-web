import React from 'react';
import TextInput from './ui/ReUableInput/TextInput';
import CustomButton from './ui/custom-buttton/CustomButton';

const NewsLetter = () => {
    return (
        <section
            className="relative top-[10rem] lg:top-[13rem] w-[100%] rounded-[30px] p-4 sm:p-12 flex flex-col items-start justify-center text-white gap-8 text-lg"
            style={{
                background:
                    "linear-gradient(109.45deg, #576428 34.41%, #131508 75.61%, #1C2108 82.85%)",
                boxShadow: "4px 4px 4px 0px #00000040",
            }}
        >
            <div className='flex flex-col items-start justify-center gap-4'>
                <h1 className='text-3xl'>Sign Up for Our Newsletters</h1>
                <p>Qorem ipsum dolor sit amet, consecteturQorem ipsum dolor si</p>
            </div>
            <div className='flex flex-col flex-wrap md:flex-row gap-8 '>
                <TextInput
                    placeholder='Enter Name'
                    overrideStyles="w-[350px] md:w-[369px]"
                />
                <TextInput
                    placeholder='Enter Email'
                    overrideStyles="w-[350px] md:w-[369px]"
                />
                <CustomButton
                    overrideStyle={"bg-black text-primary text-lg font-semibold w-full md:w-[284px] rounded-2xl p-4 shadow-buttonShadow z-50"}
                >
                    Submit
                </CustomButton>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <input type="checkbox" name="" id="" className='bg-inherit border border-white h-5 w-5' />
                <p>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
            </div>
        </section>
    );
}

export default NewsLetter;
