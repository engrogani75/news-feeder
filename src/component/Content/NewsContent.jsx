import React, { useContext } from "react";
import { NewsContext } from "../../context";
import Loader from "./Loader";
import Error from "./Error";
import EmptyResponse from "./EmptyResponse";
import LeftNews from "./LeftNews";
import RightNews from "./RightNews";

const NewsContent = () => {
  const { news, loading, error, searchValue } = useContext(NewsContext);

  const data = !searchValue ? news?.data?.articles : news?.data?.result;

  let content = null;

  if (loading && !error) {
    content = <Loader></Loader>;
  }

  if (!loading && error) {
    content = <Error />;
  }

  if (!loading && !error && data?.leanght === 0) {
    content = <EmptyResponse />;
  }

  if (!loading && !error && data?.length > 0) {
    content = (
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-12">
          <LeftNews></LeftNews>
          <RightNews></RightNews>
        </div>
      </div>
    );
  }

  // console.log(news);

  return <main className="my-10 lg:my-14">{content}</main>;
};

export default NewsContent;
