import { formatDate } from "../../utils/formatDate";
import Thumb from "./Thumb";

const LeftNewsItem = ({ article }) => {
  const {
    source: { name },
    title,
    description,
    url,
    publishedAt,
    author,
    urlToImage,
    content,
  } = article;

  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <p className="!text-green-600">{name}</p>
        <div className="flex gap-2">
          <p>Author: </p>
          <p className="text-red-600">
            {author?.startsWith("By") ? "Amir Vera" : author}
            {/* there was a strange data so i replaced it by hard coding */}
          </p>
        </div>

        <a href={url}>
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
        </a>
        <p className="text-base text-[#5C5955]">{description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {formatDate(publishedAt)}
        </p>
      </div>
      <Thumb content={content} author={author} imgUrl={urlToImage} />
    </div>
  );
};

export default LeftNewsItem;
