import React from "react";
import { newsList } from "@/data/news";
import News from "./News";

const NewsList = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {newsList.map((news) => (
        <div key={news.id} className="col-span-4">
          <News news={news} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
