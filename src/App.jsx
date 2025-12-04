import { useState, useEffect } from "react";
import "./App.css";
import NewsCard from "./Components/NewsCard.jsx";
import Form from "./Components/Form.jsx";

function App() {
  // news stores the data from api, which will later be .map so it must be saved as empty array
  const [news, setNews] = useState([]);

  const [showNoNews, setShowNoNews] = useState(true);

  // category is paramater for selectedCategory, which will store user's input
  function categoryChange(category) {
    fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_bcf12d02d2704fc9bc40884b44f7eb29&q=${category}&country=us`
    )
      .then((res) => res.json())
      .then((data) => {
        // setter function updates news variable to data fetched from api
        setNews(data.results);
        // set showNoNews to false if data fetched from api is successful
        setShowNoNews(false);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }
  return (
    <>
      <div className="full-container">
        <h1>Breaking News!</h1>
        {/* this connects categoryChange function to child's updateCategory prop name */}
        <Form updateCategory={categoryChange} />
        {showNoNews ? (
          <div className="no-news">
            <p>No news found.</p>
          </div>
        ) : (
          <div className="result">
            {news.map((item, key) => {
              return <NewsCard data={item} key={item.article_id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
