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
      className="relative top-[12rem] lg:top-20 w-[100%] rounded-[30px] h-[60vh] flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(109.45deg, #576428 34.41%, #131508 75.61%, #1C2108 82.85%)",
        boxShadow: "4px 4px 4px 0px #00000040",
      }}
    >
      <div className="flex items-center flex-col gap-4">
        <h1 className="font-semibold text-white text-[32px] leading-[43px] max-w-[430px] text-center">
          Download Munii App for iOS or Android
        </h1>
        <p className="w-[300px] md:max-w-[720px] text-center text-sm lg:text-2xl text-[#D9D9D9] leading-6">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquets.
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button onClick={openModal} className="flex flex-row bg-black p-4 items-center justify-center gap-3 w-[230px] h-[80px] rounded-[15px]">
          <Image src={googlePlay} alt="google play" />
          <div className="flex flex-col text-white gap-[0.25rem] text-left">
            <h1 className="capitalize text-lg">Get it On</h1>
            <h3 className="font-semibold text-2xl">Google Play</h3>
          </div>
        </button>
        <button onClick={openModal} className="flex flex-row bg-black p-4 items-center justify-center gap-3 w-[230px] h-[80px] rounded-[15px]">
          <IoLogoApple className="text-white w-[52px] h-[56px]" />
          <div className="flex flex-col text-white gap-[0.25rem] text-left">
            <h1 className="capitalize text-lg">Get it On</h1>
            <h3 className="font-semibold text-2xl">Apple Play</h3>
          </div>
        </button>
      </div>
      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </div>
  );
}

export default CTA;
