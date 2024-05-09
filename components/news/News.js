import React from "react";
import Link from "next/link";
import Image from "next/image";

const News = ({ news }) => {
  return (
    <article className="mb-4">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-[300px] rounded-lg"
      />

      <h1 className="font-bold text-2xl">
        <Link href={`/news/${news.slug}`}>{news.title}</Link>
      </h1>

      <p className="text-gray-500">{news.excerpt}</p>
    </article>
  );
};

export default News;
