import Tweet from "./tweets/tweet";
import Json from "../data/initial-data.json";

export default function Tweets() {
  return (
    <div className="tweets">
      {Json.tweets.map((item, i) => (
        <Tweet key={i} value={item} />
      ))}
    </div>
  );
}
