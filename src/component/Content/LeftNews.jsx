import { useContext } from "react";
import { NewsContext } from "../../context";
import LeftNewsItem from "./LeftNewsItem";

const LeftNews = () => {
  const { news, loading, error, searchValue } = useContext(NewsContext);

  const data = !searchValue ? news?.data?.articles : news?.data?.result;
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {data?.map(
        (article) =>
          article.urlToImage && (
            <LeftNewsItem article={article} key={crypto.randomUUID()} />
          )
      )}
    </div>
  );
};

export default LeftNews;
