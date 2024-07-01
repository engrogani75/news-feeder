import "./App.css";
import NewsApp from "./NewsApp";
// import { NewsContext } from "./context";
import { NewsProvider, SearchProvider, ThemeProvider } from "./provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <SearchProvider>
          <NewsProvider>
            <NewsApp></NewsApp>
          </NewsProvider>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
