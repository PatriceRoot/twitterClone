import Header from "./components/header.jsx";
import TweetEditor from "./components/tweet-editor.jsx";
import Tweets from "./components/tweets.jsx";
import Sidebar from "./components/sidebar.jsx";
import "./App.css";
import Trends from "./components/trends.jsx";
import Follow from "./components/trends/follow.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";
import { TweetContext } from "./contexts/tweets.js";
import initial from "../src/data/initial-data.json";

export default function App() {
  return (
    <>
      <TweetContext.Provider value={initial}>
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
  );
}
