import React from "react";
import Image from "next/image";
import { CardProp } from "@/types";
import { cardIcon } from "@/public/images";

function Features() {
  const Card = ({ title, text }: CardProp) => {
    return (
      <div className="flex flex-col max-w-[387px] h-[286px] rounded-[20px] bg-white gap-10 p-8" style={{ boxShadow: '1px 5px 40px 8px #6E758812' }}>
        <div className="bg-black rounded-[50%] p-4 w-[50px] h-[50px]">
          <Image src={cardIcon} alt="card icon" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-text">{title}</h1>
          <p className="text-[16px] leading-[24px] text-s-text">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-[5rem]">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-[36px] font-semibold leading-[54px] text-text text-center">
          Our Features
        </h1>
        <p className="text-center font-[500] text-[16px] max-w-[549px] text-s-text">
          Browse through a variety of collaboration opportunities available on
          the platform
        </p>
      </div>
      <div className="mt-10 flex flex-row md:flex-wrap gap-8">
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
    </div>
  );
}

export default Features;
