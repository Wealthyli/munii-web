import React from "react";
import { bannerImage, googlePlay } from "@/public/images";
import Image from "next/image";
import { IoLogoApple } from "react-icons/io";

function Hero() {
  return (
    <section className=" flex lg:flex-row px-4 lg:px-[5rem] items-center lg:justify-between mt-8 w-full">
      <div className="flex flex-col justify-center items-center lg:items-stretch w-full lg:max-w-[40%]">
        <h1 className="text-[36px] md:text-[48px] leading-[48px] md:leading-[72px] font-semibold text-text text-center lg:text-left">
          Ready to Take Control of Your Finances?
        </h1>
        <p className="text-[16px] md:text-[18px] mt-4 lg:max-w-[31rem] text-text text-center lg:text-left">
          Discover the power of smart budgeting with our app. Optimize your
          spending, reach your goals faster, and enjoy a more fulfilling life.
        </p>
        <div className="lg:hidden lg:max-w-[60%] mt-10 ">
          <Image
            src={bannerImage}
            alt="hero-image"
            className="w-full md:w-[486px] h-auto md:h-[507px]"
          />
        </div>
        <div className="mt-8 flex flex-col lg:flex-row gap-4 ">
          <button className="flex flex-row bg-black p-4 items-center justify-evenly md:justify-center gap-3 w-full md:w-[330px] h-[100px] rounded-[5px]">
            <Image src={googlePlay} alt="google play" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg">Get it On</h1>
              <h3 className="font-semibold text-2xl">Google Play</h3>
            </div>
          </button>
          <button className="flex flex-row bg-black p-4 items-center justify-evenly md:justify-center gap-3 w-full md:w-[330px] h-[100px] rounded-[5px]">
            <IoLogoApple className="text-white w-[52px] h-[56px]" />
            <div className="flex flex-col text-white gap-[0.25rem] text-left">
              <h1 className="capitalize text-lg">Get it On</h1>
              <h3 className="font-semibold text-2xl">Apple Play</h3>
            </div>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex md:max-w-[60%] mt-8 md:mt-0">
        <Image
          src={bannerImage}
          alt="hero-image"
          className="w-full md:w-[486px] h-auto md:h-[507px]"
        />
      </div>
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
    </section>
  );
}

export default Hero;
