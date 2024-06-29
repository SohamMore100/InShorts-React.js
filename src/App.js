// import './App.css ';
import { useEffect, useState } from 'react';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from "./data/config"
import axios from "axios";
import Footer from './components/Footer/Footer';


function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&pageSize=${loadMore}&category=${category}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults); 
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}/>
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
