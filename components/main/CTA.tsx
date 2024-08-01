'use client'
import { googlePlay } from "@/public/images";
import Image from "next/image";
import React, { useState } from "react";
import { IoLogoApple } from "react-icons/io";
import ComingSoonModal from './ComingSoonModal'

function CTA() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(prev => !prev)
  }


  const closeModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div
      className=" px-4 md:px-[5rem] "
    >
      <div
        className="relative top-[5rem] lg:top-[20rem] w-[100%]  p-8 rounded-[30px] md:h-[60vh] flex flex-col items-center justify-center gap-8"
        style={{
          background:
            "linear-gradient(109.45deg, #576428 34.41%, #131508 75.61%, #1C2108 82.85%)",
          boxShadow: "4px 4px 4px 0px #00000040",
        }}
      >

        <div className="flex items-center flex-col gap-4">
          <h1 className="font-semibold text-white text-xl md:text-[32px] leading-[43px] max-w-[430px] text-center">
            Download Munii App for iOS or Android
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row gap-4">
          <button onClick={openModal} className="flex flex-row bg-black p-4 items-center justify-center gap-3 md:w-[300px] h-[80px] rounded-[15px]">
            <Image src={googlePlay} alt="google play" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg">Get it On</h1>
              <h3 className="font-semibold text-2xl">Google Play</h3>
            </div>
          </button>
          <button
            onClick={openModal}
            className="flex flex-row bg-black p-4 items-center justify-evenly md:justify-center gap-1 md:w-[300px] h-[80px] rounded-[15px]"
          >
            <IoLogoApple className="text-white w-[100px] h-[90px]" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg whitespace-nowrap">Download On the</h1>
              <h3 className="font-semibold text-3xl">App Store</h3>
            </div>
          </button>
        </div>
      </div>

      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </div>
  );
}

export default CTA;
