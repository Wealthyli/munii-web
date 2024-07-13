// @ts-nocheck
"use client";
import React, { useState } from "react";
import { bannerImage, googlePlay } from "@/public/images";
import Image from "next/image";
import { IoLogoApple } from "react-icons/io";
import { motion } from "framer-motion";
import ComingSoonModal from "./main/ComingSoonModal";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className=" flex lg:flex-row px-4 lg:px-[5rem] items-center lg:justify-between text-white w-full bg-black py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center lg:items-stretch w-full lg:max-w-[45%]"
      >
        <h1 className="text-[36px] md:text-[48px] leading-[48px] md:leading-[72px] font-bold text-center lg:text-left">
          Seamless Financial Management Made<span className="text-primary">{" "}Simple</span>
        </h1>
        <p className="text-[16px] md:text-[18px] mt-4 lg:max-w-[31rem] text-center lg:text-left">
          Unify your accounts, monitor your spending, budget and invest with ease.
        </p>
        <div className="lg:hidden lg:max-w-[60%] mt-10 ">
          <Image
            src={bannerImage}
            alt="hero-image"
            className="w-full md:w-[486px] h-auto md:h-[507px]"
          />
        </div>
        <div className="mt-8 flex flex-col lg:flex-row gap-4 ">
          <button
            onClick={openModal}
            className="flex flex-row bg-black p-4 items-center justify-evenly md:justify-center gap-3 w-full md:w-[330px] h-[100px] border rounded-md"
          >
            <Image src={googlePlay} alt="google play" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg">Get it On</h1>
              <h3 className="font-semibold text-2xl">Google Play</h3>
            </div>
          </button>
          <button
            onClick={openModal}
            className="flex flex-row bg-black p-4 items-center justify-evenly md:justify-center gap-3 w-full md:w-[330px] h-[100px] border rounded-md"
          >
            <IoLogoApple className="text-white w-[52px] h-[56px]" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg">Get it On</h1>
              <h3 className="font-semibold text-2xl">Apple Play</h3>
            </div>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hidden lg:flex md:max-w-[60%] mt-8 md:mt-0"
      >
        <Image
          src={bannerImage}
          alt="hero-image"
          className="w-full md:w-[486px] h-auto md:h-[507px]"
        />
      </motion.div>
      {/* shallow header background */}
      <div
        style={{
          width: "818.5px",
          height: "1371.91px",
          top: "-190px",
          left: "120px",
          borderRadius: "40%",
          opacity: "10",
          transform: "rotate(24.54deg)",
          background: "#CAFF011A",
          position: "absolute",
          zIndex: "-1",
        }}
        className="hidden lg:flex"
      />
      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </section>
  );
}

export default Hero;
