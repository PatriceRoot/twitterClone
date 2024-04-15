import { useContext } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../components/tweets";
import { TweetContext } from "../contexts/tweets";

export default function Profile() {
  const tweet = useContext(TweetContext);
  const { username } = useParams();

  return (
    <div>
      <h1>Profile of {username}</h1>
      {tweet.tweets
        .filter((t) => t.tweet_content.tweet_tag == "@CNN")
        .map((el, i) => (
          <Tweet key={i} data={el} />
        ))}
    </div>
  );
}
