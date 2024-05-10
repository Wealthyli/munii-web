// @ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardProp } from "@/types";
import { cardIcon, Analysis, budg, track } from "@/public/images";
import { motion } from "framer-motion";
import ComingSoonModal from "./ComingSoonModal";

function Features() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
      setIsModalOpen(prev => !prev)
    }


  const closeModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const Card = ({ title, text }: CardProp) => {
    return (
      <motion.div
        whileHover={{ scale: 1 }}
        className="flex flex-col max-w-[387px] h-auto md:h-[286px] rounded-[20px] bg-white gap-10 p-8"
        style={{ boxShadow: "1px 5px 40px 8px #6E758812" }}
      >
        <div className="bg-black rounded-[50%] p-4 w-[50px] h-[50px]">
          <Image src={cardIcon} alt="card icon" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-text">{title}</h1>
          <p className="text-[16px] leading-[24px] text-s-text">{text}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex flex-col px-4 md:px-[5rem]"
      id="services"
    >
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-[36px] font-semibold leading-[54px] text-text text-center">
          Our Features
        </h1>
        <p className="text-center font-[500] text-[16px] max-w-[549px] text-s-text">
          Browse through a variety of collaboration opportunities available on
          the platform
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center">
        <Card
          title="AI Chat"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
        <Card
          title="Link All Your Account"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
        <Card
          title="Track Your Expenses"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
        <Card
          title="Save For Rainy Days"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
        <Card
          title="Account Stats"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
        <Card
          title="Financial Advice"
          text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
        />
      </div>
      <section className="mt-24 flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [-40, 0] }, { opacity: 1 }]}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={Analysis}
              alt="analysis of spending"
              className="w-[548px] h-auto md:h-[390px]"
            />
          </motion.div>
          <div className="flex flex-col gap-6 w-auto  lg:max-w-[495px]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="font-semibold text-[28px] lg:text-[32px] leading-[43.36px] text-text "
            >
              Analyze your spending habits and find ways to save your money
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify  text-sm leading-[24px]"
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquets.Corem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscing elit. N.Analyze your spending habits and
              find ways to save yectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscinipsu
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={budg}
              alt="analysis of spending"
              className="w-auto lg:w-[548px] h-auto lg:h-[390px]"
            />
          </motion.div>
          <div className="flex flex-col gap-6 lg:max-w-[495px]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="font-semibold text-[28px] lg:text-[32px] leading-[43.36px] text-text "
            >
              Budget Your Income And Stay on Top of Your Spending{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify text-sm leading-[24px]"
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquets.Corem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscing elit. N.Analyze your spending habits and
              find ways to save yectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscinipsu
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [-40, 0] }, { opacity: 1 }]}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={track}
              alt="analysis of spending"
              className="w-auto lg:w-[548px] h-auto lg:h-[390px]"
            />
          </motion.div>
          <div className="flex flex-col gap-6 lg:max-w-[495px]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="font-semibold text-[28px] lg:text-[32px] leading-[43.36px] text-text "
            >
              Get all your questions about finance answered{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify text-sm leading-[24px]"
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquets.Corem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscing elit. N.Analyze your spending habits and
              find ways to save yectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquets.Corem ipsum dolor sit amet,
              consectetur adipiscinipsu
            </motion.p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mt-16">
        <button onClick={openModal} className="text-primary bg-black w-[210px] h-[56px] flex items-center justify-center rounded-[20px] font-semibold">
          Get Started
        </button>
      </div>
      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </motion.div>
  );
}

export default Features;
