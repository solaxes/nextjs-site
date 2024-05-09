import React from "react";
import { newsList } from "@/data/news";
import NewsWithContent from "@/components/news/NewsWithContent";
import NotFound from "@/app/not-found";
const NewsDetail = ({ params }) => {
  const result = newsList.filter((newsItem) => newsItem.slug === params.slug);

  return result.length === 0 ? (
    <NotFound msg="Blog with slug not found" />
  ) : (
    <NewsWithContent news={result[0]} />
  );
};

export default NewsDetail;
