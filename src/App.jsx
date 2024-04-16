import { Outlet } from "react-router-dom";
import "./App.css";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import Trends from "./components/trends.jsx";
import Follow from "./components/trends/follow.jsx";
import Footer from "./components/footer.jsx";
import { TweetContext } from "./contexts/tweets.js";

function App() {
  const { data: tweetData } = useFetch("http://localhost:3000/tweets");
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch("http://localhost:3000/current-user");
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  return (
    tweets &&
    current && (
      <>
        <TweetContext.Provider value={{ tweets, current }}>
          <div style={{ flex: "0 0 25%" }}>
            <Sidebar />
          </div>
          <div className="timeline">
            <Outlet />
          </div>
          <div style={{ flex: "0 0 25%" }}>
            <Trends />
            <Follow />
            <Footer />
          </div>
        </TweetContext.Provider>
      </>
    )
  );
}

export default App;
