import { useContext } from "react";
import SearchLogo from "../../assets/icons/search.svg";
import { NewsContext } from "../../context";
import useSearch from "../../hook/useSearch";

const SearchBar = () => {
  const { toggleSearch, inputRef, searchOpen, handleChange } = useSearch();

  const { error } = useContext(NewsContext);
  return (
    <div className="flex items-center space-x-3 lg:space-x-8" ref={inputRef}>
      {searchOpen && (
        <input
          disabled={error}
          onChange={handleChange}
          autoFocus
          placeholder={error ? "No data..." : "Search For Any News"}
          className="border border-black rounded-lg p-1"
          type="search"
        />
      )}
      <img
        src={SearchLogo}
        onClick={toggleSearch}
        className="cursor-pointer shadow-md p-2 rounded-full"
      />
    </div>
  );
};

export default SearchBar;
