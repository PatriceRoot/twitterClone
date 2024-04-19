import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Trends from "./components/trends.jsx";
import Follow from "./components/trends/follow.jsx";
import Footer from "./components/footer.jsx";
import { TweetContext } from "./contexts/tweets.jsx";

function App() {
  return (
    <>
      <TweetContext>
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
      </TweetContext>
    </>
  );
}

export default App;
