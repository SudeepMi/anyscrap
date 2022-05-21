import React, { useEffect } from "react";
import "./style.css";
import API from "../../utils/Api";
import Products from "../../components/Products";
import AmazonLogo from "../../assets/amazon.png";
import EbayLogo from "../../assets/ebay.png";
import {Link} from "react-router-dom"
// import axios from "axios";

function News() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [news,setNews] = React.useState([])

  const handleSearch = async (e) => {
    e.preventDefault();
    alert(query);
    await API.post("/scrap", { query }).then((res) => {
      setResults(res.data.data);
    });
  };

  const getNews = async() => {
    const news = await API.get("scrap/news")
    console.log(news.data.data.wikiUrls)
    setNews(news.data.data.wikiUrls)
  }

  useEffect(() => {
    getNews()
  },[])

  return (
    <div className="container">
      <h1>News</h1>
      <p>This tool fetches news information from different news portal</p>
      <div className="search__section">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search__input"
        />
        <button
          className="search__button"
          onClick={handleSearch}
          disabled={query ? false : true}
        >
          Search
        </button>
      </div>
      <div className="results__section">
        <div className="results__container">
          <div className="results__header">
            <h1>Results</h1>
            {news.map((news,i) => {
              console.log(news)
              return <div key={i}>
                <p>{news.title}</p>
                <Link to={`${news.link}`} style={{textDecoration:"underline"}} >Go to news</Link>
              </div>
            })}
          </div>
          <div className="results__body">
            <div className="results__body-container">
              {results.amazon && (
                <>
                  <img src={AmazonLogo} alt="snapdeal" width={"20%"}></img>
                  {results?.amazon.map((result, index) => (
                    <Products key={index} product={result} />
                  ))}
                </>
              )}
            </div>
            <div className="results__body-container">
              {results.amazon && (
                <>
                  <img src={EbayLogo} alt="snapdeal" width={"20%"}></img>
                  {results.ebay &&
                    results?.ebay.map((result, index) => (
                      <Products key={index} product={result} />
                    ))}
                </>
              )}
            </div>
            <div className="results__body-container">
              {results.amazon && (
                <>
                  <img
                    src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
                    alt="snapdeal"
                  ></img>
                  {results.snapdeal &&
                    results?.snapdeal.map((result, index) => (
                      <Products key={index} product={result} />
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
