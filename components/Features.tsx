// @ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardProp } from "@/types";
import { cardIcon, Analysis, budg, track, Trackpic } from "@/public/images";
import { motion } from "framer-motion";
import ComingSoonModal from "./main/ComingSoonModal";
import Button from "./Button";
import { BiSolidBank } from "react-icons/bi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { RiListCheck2 } from "react-icons/ri";

function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const features = [
    {
      title: "All Your Accounts in One Place",
      desc: "Streamline your finances by viewing all your bank accounts in one place.",
      icon: <BiSolidBank className=" w-[40px] h-[40px] text-primary"/>,
    },
    {
      title: "Stay On Track With Smart Alerts",
      desc: "Receive timely alerts and reminders to avoid missed payments and keep your spending within budget.",
      icon: <HiMiniBellAlert className=" w-[40px] h-[40px] text-primary"/>,
    },
    {
      title: "Automatic Transaction Categorization",
      desc: "Effortlessly categorize your bank account transactions automatically for streamlined expense tracking and better financial management.",
      icon: <RiListCheck2 className=" w-[40px] h-[40px] text-primary"/>,
    },
  ];
  const Card = ({ title, text, icon }: CardProp) => {
    return (
      <motion.div
        whileHover={{ scale: 1 }}
        className="flex flex-col max-w-[387px] h-auto md:h-[350px] rounded-[20px] bg-white gap-10 p-8 "
        style={{ boxShadow: "1px 5px 40px 8px #6E758812" }}
      >
        <div className="bg-black rounded-[50%] p-4 w-[50px] h-[50px] flex items-center justify-center">
          {icon}
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
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center">
        {features.map((item, key) => (
          <Card
            key={key}
            title={item.title}
            text={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
      <section className="mt-24 flex flex-col gap-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [-20, 0] }, { opacity: 1 }]}
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
              Track and analyze your expenses{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify  text-sm leading-[24px]"
            >
              Understand your spending patterns, make informed decisions, and
              take control of your financial future.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-around items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
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
              Control Your Spending{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify text-sm leading-[24px]"
            >
              Allocate your funds effectively, set realistic financial goals,
              and ensure every resource is working for you.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [-40, 0] }, { opacity: 1 }]}
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
              Stay Informed, Stay Secure{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify text-sm leading-[24px]"
            >
              Experience smarter financial management with tailored
              recommendations just for you.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-around items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={[{ x: [40, 0] }, { opacity: 1 }]}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={Trackpic}
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
              Empower Your Financial Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={[{ opacity: 1 }]}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-s-text text-justify text-sm leading-[24px]"
            >
              Maximize your financial potential with our expert-managed
              portfolios, automated savings plans, and extensive financial
              education resources.
            </motion.p>
          </div>
        </div>
      </section>
      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </motion.div>
  );
}

export default Features;
