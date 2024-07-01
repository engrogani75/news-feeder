import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsItem from "./NewsItem";

const RightNews = () => {
  const { news, loading, error, searchValue } = useContext(NewsContext);

  const data = !searchValue ? news?.data?.articles : news?.data?.result;
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {data?.map(
          (article) =>
            !article.urlToImage && (
              <NewsItem article={article} key={crypto.randomUUID()} />
            )
        )}
      </div>
    </div>
  );
};

export default RightNews;
