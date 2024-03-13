import Header from "./components/header.jsx";
import TweetEditor from "./components/tweet-editor.jsx";
import Tweets from "./components/tweets.jsx";
import Sidebar from "./components/sidebar.jsx";
import "./App.css";
import Trends from "./components/trends.jsx";

export default function Timeline() {
  return (
    <>
    <div>
      <Sidebar/>
    </div>
    <div className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
    <div>
      <Trends/>
    </div>
    </>
  );
}
