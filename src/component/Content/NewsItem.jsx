import React from "react";
import Info from "./Info";

const NewsItem = ({ article }) => {
  return (
    <div className="className='col-span-12 mb-6 md:col-span-8'">
      <Info article={article}></Info>
    </div>
  );
};

export default NewsItem;
