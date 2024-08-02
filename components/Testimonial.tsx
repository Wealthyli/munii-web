// @ts-nocheck
"use client";
import React from "react";
import { TestimonialCardProp } from "@/types";
import Image from "next/image";
import { doe } from "@/public/images";
import CTA from "./main/CTA";
import { motion } from "framer-motion";
import { FrequentAskQuestion } from "./about";

function Testimonial() {
  const testimonials = [
    {
      image: doe,
      name: "Mike Evans",
      text: "Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits.",
    },
    {
      image: doe,
      name: "Patricia Holmes",
      text: "Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits.",
    },
    {
      image: doe,
      name: "Jack Smith",
      text: "Saving with munii has been an absolute game-changer for my Finance. Their strategic approach, creativity, and dedication have significantly impacted my financial habits.",
    },
  ];

  const Card = ({ image, text, name }: TestimonialCardProp) => {
    return (
      <div className="">
        <div className="relative left-[36.81px] top-[2rem] flex items-end justify-center overflow-hidden w-[100px] h-[100px] rounded-[50%] bg-[#D9D9D9]">
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
    <div className=" ">
      <div className="flex flex-col gap-4 items-center justify-center bg-[#CAFF011A] w-full py-8 ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-[36px] text-center font-semibold leading-[54px] text-text max-w-[678px]"
        >
          What Our Customers Say About Us
        </motion.h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-4">
          {testimonials.map((item, key) => (
            <Card
              key={key}
              image={item.image}
              text={item.text}
              name={item.name}
            />
          ))}
        </div>
      </div>

      <div>
        <FrequentAskQuestion />
      </div>
      <CTA />
    </div>
  );
}

export default Testimonial;
