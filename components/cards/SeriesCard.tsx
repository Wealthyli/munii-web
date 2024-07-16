import { SeriesCardProp } from "@/types";
import Image from "next/image";
import React from "react";

const SeriesCard = ({ blogImage, title, date }: SeriesCardProp) => {
  return (
    <article className="flex flex-row gap-4 items-start justify-center max-w-[340px] ">
      <div className="flex items-center justify-center rounded-xl bg-gray-400 h-[100px] 
      w-[144px] relative">
        <Image
          src={blogImage}
          alt="blog"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg line-clamp-2">{title}</p>
        <p className="text-sm text-s-text">{date}</p>
      </div>
    </article>
  );
};

export default SeriesCard;
