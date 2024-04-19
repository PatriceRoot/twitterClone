import { useContext } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../components/tweets/tweet";
import { Context } from "../contexts/tweets";

export default function Profile() {
  const { tweets } = useContext(Context);
  const { username } = useParams();
  console.log(tweets);
  return (
    <div>
      <h1>Profile of {username}</h1>
      {tweets
        .filter((t) => t.tweet_content.tweet_tag == username)
        .map((el, i) => (
          <Tweet key={i} value={el} />
        ))}
    </div>
  );
}
