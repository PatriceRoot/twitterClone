import { Context } from "../contexts/tweets";
import Tweet from "./tweets/tweet";
import { useContext } from "react";

export default function Tweets() {
  const { tweets } = useContext(Context);
  const tweet = [...tweets];
  return (
    <div className="tweets">
      {tweet.reverse().map((item, i) => (
        <Tweet key={i} value={item} />
      ))}
    </div>
  );
}
