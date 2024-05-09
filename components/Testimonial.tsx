// @ts-nocheck
'use client'
import React from "react";
import { TestimonialCardProp } from "@/types";
import Image from "next/image";
import { doe } from "@/public/images";
import CTA from './CTA'
import { motion } from "framer-motion";


function Testimonial() {
  const Card = ({ image, text, name }: TestimonialCardProp) => {
    return (
      <div className="">
        <div className="relative left-[36.81px] top-[3rem] flex items-end justify-center overflow-hidden w-[99px] h-[100px] rounded-[50%] bg-[#D9D9D9]">
          <Image
            alt="customer image"
            src={image}
            className=" w-[99px] h-[100px]"
          />
        </div>

        <div className="bg-white rounded-2xl py-12 md:py-16 px-12  w-full lg:w-[388px]  lg:h-[262px] flex flex-col lg:gap-2">
          <h2 className="text-[14px] text-justify leading-[24px] text-text max-w-[349px]">
            {text}
          </h2>
          <div className="border-2 w-[100%] h-[2px] mt-12 lg:mt-0" />
          <div className="flex flex-col mt-4 lg:mt-0">
            <h2 className="font-semibold text-[14px] leading-6 text-text">
              {name}
            </h2>
            <h2 className=" text-[14px] leading-6 text-text">Customer</h2>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-4 md:px-[5rem] bg-[#CAFF011A] w-[100vw] lg:h-[100vh] pt-8 lg:pt-20 ">
      <div className="flex flex-col gap-4 items-center justify-center">
        <motion.h1 
                      initial={{ opacity: 0 }}
                      whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-[36px] text-center font-semibold leading-[54px] text-text max-w-[678px]">
          What Our Customers Say About Us
        </motion.h1>
        <p className="text-s-text leading-[24px] text-[16px] text-center max-w-[549px]">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <Card
          image={doe}
          name="John Doe"
          text="Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits."
        />
        <Card
          image={doe}
          name="John Doe"
          text="Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits."
        />
        <Card
          image={doe}
          name="John Doe"
          text="Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits."
        />
      </div>
      <CTA />
    </div>
  );
}

export default Testimonial;
