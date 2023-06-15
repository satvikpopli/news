import { useState } from "react";
import GlobalStyle from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styled/Themes";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Trending from "./components/Trending";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }
  const [newsArticles, setNewsArticles] = useState(null);
  const getData = async (query = "") => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9306c46676245b1aa5b94305b66ed82`;
    if (query.length) {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=f9306c46676245b1aa5b94305b66ed82`;
    }
    const response = await fetch(url)
    const result = await response.json();
    setNewsArticles(result.articles);
  }
  if (newsArticles === null) {
    getData();
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header onClick={toggleTheme} theme={theme} onCategoryChange={(text) => getData(text)}/>
        {!newsArticles && <Preloader />}
        {newsArticles && newsArticles.length === 0 && <p>No News Available</p>}
        {newsArticles && newsArticles.length > 0 && <Featured featuredArticles={[newsArticles[0], newsArticles[1]]} />}
        {newsArticles && newsArticles.length > 2 && <Trending articles={newsArticles} />}
      </ThemeProvider>
    </>
  );
}


export default App;