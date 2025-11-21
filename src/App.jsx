import { useState, useEffect } from 'react'
import './App.css'
import NewsCard from "./Components/NewsCard.jsx";
import Form from "./Components/Form.jsx";

function App() {
  // news stores the data from api, which will later be .map so it must be saved as empty array
  const [news, setNews] = useState([]);

  // setCategory is the setter function that updates cateogry variable. 
  // only works with null but not "" because in fetch link "" breaks the fetch??
  const [category, setCategory] = useState(null);

  const [showNoNews, setShowNoNews] = useState(true);
  useEffect(() => {
    // part 1 {} is what to do, the code to run
    fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_bcf12d02d2704fc9bc40884b44f7eb29&q=${category}&country=us`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((err) => console.log('Error fetching data:', err));
  }, [category]);
  // part two is [category], this is when to do it. [] means do run previous code only when page first loads. [category] means run code when page loads and when cateogry changes

  // categoryChange updates category to store received data from user in function/prop updateCategory
  function categoryChange(updateCategory) {
    setCategory(updateCategory);
    setShowNoNews(!showNoNews);
  }
  return (
    <>
      <div className="full-container">
        <h1>Breaking News!</h1>
        <Form updateCategory={categoryChange} />
        {showNoNews ? (<div className="no-news">
          <p>No news found.</p>
        </div>) : (<div className="result">
          {news.map((item, key) => {
            return <NewsCard data={item} key={item.article_id} />
          })}
        </div>)
        }
          </div>
    </>
  )
}

export default App
