import { BlogPostProp } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const BlogPostCard = ({
  createdAt,
  slug,
  title,
  body,
  categories,
  publishedAt,
  author,
  mainImageUrl,
  id,
  shareCount,
  authorImage,
}: BlogPostProp) => {

  const formattedDate = format(new Date(publishedAt), "MMMM-dd-yyyy");

  return (
    <article className="max-w-[385px] flex flex-col gap-4">
      <div className="flex items-center justify-center bg-gray-400 w-[386px] h-[336px] overflow-hidden relative rounded-3xl">
        <Image
          src={mainImageUrl ? mainImageUrl : "/images/avatar.png"}
          alt="blog post"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0" />
      </div>
      <h1 className="text-2xl font-medium">{title}</h1>
      <div className="flex items-start justify-between ">
        <div className="flex gap-2 items-start justify-start">
          <div className="w-[28px] h-[28px]">
            <Image
              src={authorImage ? authorImage : "/images/avatar.png"}
              width={28}
              height={28}
              alt="avatar"
              className="rounded-[50%]"
            />
          </div>
          <p className="text-lg font-medium truncate w-[110px]">{author}</p>
        </div>
        <div className="flex gap-2 text-sm whitespace-nowrap">
          <p>{formattedDate}</p>
          <div className="w-4 h-4">
            <Image
              src={"/images/shareIcon.svg"}
              width={16}
              height={16}
              alt="blog post"
              className="rounded-xl "
            />
          </div>
          <p>{shareCount} shares</p>
        </div>
      </div>
      <p>{body}</p>
      <Link href={`/blog/${id}`} className="self-end border-b border-b-black">
        View Post
      </Link>
    </article>
  );
};

export default BlogPostCard;
