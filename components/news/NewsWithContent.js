import React from "react";

const NewsWithContent = ({ news }) => {
  return (
    <div className="p-6 mb-6">
      <img src={news.image} className="w-full h-3/6 rounded-2xl" />
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <small className="text-gray-500">{news.date}</small>
      <p className="text-justify mt-4">{news.content}</p>
    </div>
  );
};

export default NewsWithContent;
