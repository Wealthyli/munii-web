import { ValueCardProp } from "@/types";
import Image from "next/image";
import React from "react";
import {
  integrity,
  innovation,
  security,
  excellence,
  education,
  accessibility,
} from "@/public/images";

const OurValues = () => {
  const values = [
    {
      icon: education,
      title: "Empowerment through Education",
      description:
        "We believe that financial literacy is the key to financial empowerment. Our goal is to equip you with the knowledge and tools needed to make informed financial decisions. By providing personalized financial education, we aim to address the challenges of limited access, lack of awareness, and language barriers.",
    },
    {
      icon: security,
      title: "Transparency and Trust",
      description:
        "Transparency is at the core of what we do. We strive to provide clear, honest, and straightforward information about financial products and services. By fostering a culture of transparency, we help you understand the true costs and benefits of your financial choices, building trust in the process",
    },
    {
      icon: accessibility,
      title: "Accessibility and Inclusion",
      description:
        "Financial education should be accessible to everyone, regardless of their background or language. We are committed to making our resources available to a diverse audience, ensuring that all Africans can benefit from our tools and insights. This includes offering materials in various languages and formats to reach as many people as possible.",
    },
    {
      icon: innovation,
      title: "Innovation and Growth",
      description:
        "We are dedicated to continuous improvement and innovation. By leveraging technology, we provide real-time financial data and insights, helping you stay informed and make proactive decisions. Our tools for budgeting, financial simulations, and goal setting are designed to help you grow your wealth and achieve financial stability.",
    },
  ];
  const ValueCard = ({ icon, title, description }: ValueCardProp) => {
    return (
      <article className="flex flex-col items-start gap-4 text-left rounded-3xl bg-white shadow-3xl max-w-[288px]  p-4">
        <div className="flex items-center justify-center bg-black rounded-full p-2">
          <Image src={icon} width={35} height={35} alt="icon" />
        </div>
        <h2 className="font-semibold text-[20px] md:text-[24px] text-black leading-[36px]">
          {title}
        </h2>
        <p className="font-normal text-[14px] md:text-[16px] text-grey/02 leading-[24px]">
          {description}
        </p>
      </article>
    );
  };
  return (
    <section className="bg-white text-center flex flex-col items-center justify-center gap-10 my-24">
      <div className="sm:w-[70vw] md:w-[40vw] px-4">
        <h1 className="font-semibold text-black text-4xl mb-4">Our Values</h1>
        <p className="font-medium text-[16px] text-grey/02 leading-[24px] ">
          At Munii, we're committed to helping you take control of your finances
          and achieve your financial dreams. Join us on this journey to
          financial empowerment and take the first step towards a more secure
          and prosperous future.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly w-full gap-4 md:gap-0">
        {values.map((item, key) => (
          <ValueCard
            key={key}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValues;
