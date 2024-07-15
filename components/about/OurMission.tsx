import Image from "next/image";
import React from "react";
import { mission } from "@/public/images";

const OurMission = () => {
  return (
    <section className="bg-[#CAFF011A] text-center flex flex-col items-center px-4 py-12 my-12 gap-4 shadow-missionShadow">
      <h1 className=" font-bold leading-[54px] text-[28px] md:text-[36px] ">Our Mission</h1>
      <p className="leading-[32px] md:text-[1rem] text-[14px] font-normal md:w-[522px]">
        Our mission is to educate and inform you financially, helping you make
        better financial decisions and ultimately achieve your financial goals.
        We aim to bridge the gap in financial literacy by providing
        easy-to-understand, accessible, and relevant financial education and
        tools tailored to your unique needs.
      </p>
    </section>
  );
};

export default OurMission;
