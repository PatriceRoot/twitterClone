import Header from "./components/header.jsx";
import TweetEditor from "./components/tweet-editor.jsx";
import Tweets from "./components/tweets.jsx";
import Sidebar from "./components/sidebar.jsx";
import "./App.css";
import Trends from "./components/trends.jsx";
import Follow from "./components/trends/follow.jsx";
import Footer from "./components/footer.jsx";

export default function Timeline() {
  return (
    <>
      <div style={{ flex: "0 0 25%" }}>
        <Sidebar />
      </div>
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div style={{ flex: "0 0 25%" }}>
        <Trends />
        <Follow />
        <Footer />
      </div>
    </>
  );
}
