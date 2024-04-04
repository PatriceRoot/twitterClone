import { TweetContext } from "../contexts/tweets";
import Tweet from "./tweets/tweet";
import { useContext } from "react";

export default function Tweets() {
  const Json = useContext(TweetContext);
  return (
    <div className="tweets">
      {Json.tweets.map((item, i) => (
        <Tweet key={i} value={item} />
      ))}
    </div>
  );
}
