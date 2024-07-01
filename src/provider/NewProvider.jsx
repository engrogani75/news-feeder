import { useContext } from "react";
import { NewsContext, SearchContext } from "../context";
import useNewsQuery from "../hook/useNewsQuery";

const NewProvider = ({ children }) => {
  const { searchValue } = useContext(SearchContext);
  const { news, setNews, loading, error, categories, setCategories } =
    useNewsQuery(searchValue);

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        loading,
        error,
        categories,
        setCategories,
        searchValue,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewProvider;
