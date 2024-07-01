import { useContext } from "react";
import Nav from "./component/Header/Nav";
import NewsContent from "./component/Content/NewsContent";

import { ThemeContext } from "./context";
import Footer from "./Footer/Footer";

const NewsApp = () => {
  // const [query, setQuery] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className={`${isDark ? "bg-gray-700 text-white" : ""}`}>
        <Nav></Nav>
        <NewsContent></NewsContent>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NewsApp;
