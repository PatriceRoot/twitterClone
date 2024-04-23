import { useContext, useState } from "react";
import Comment from "../../../icons/Comment";
import Like from "../../../icons/Like";
import Retweet from "../../../icons/Retweet";
import Share from "../../../icons/Share";
import TweetAction from "./tweet-actions/tweet-action";
import { Context } from "../../../contexts/tweets";
import axios from "axios";

export default function TweetActions() {
  const tweet = useContext(Context);
  const [state, setState] = useState(Array(4).fill(false));
  const [action, setAction] = useState(tweet.tweet_content.tweet_actions.state);
  const verify = (i) => {
    const newSvg = state.slice();
    newSvg[i] = !newSvg[i];
    setState(newSvg);
  };
  const handleClick = (id) => {
    const data = { ...tweet };
    data.tweet_content.tweet_actions.state =
      !data.tweet_content.tweet_actions.state;
    axios
      .put(`https://tweeter-clone-json-server.onrender.com/tweets/${id}`, data)
      .then((res) => {
        setAction(res.data.tweet_content.tweet_actions.state);
      })
      .catch((err) => console.error(err));
  };
  const acts = [
    {
      logo: (
        <Comment
          Csvg={state[0] ? "#1d52f022" : ""}
          color={state[0] ? "#1d52f0" : "#6E767D"}
        />
      ),
      nbr: tweet.tweet_content.tweet_actions.reply,
      title: "Comment",
      color: state[0] ? "#1d52f0" : "#6E767D",
    },

    {
      logo: (
        <Retweet
          Csvg={state[1] ? "#1df04022" : ""}
          color={state[1] ? "#1df040" : "#6E767D"}
        />
      ),
      nbr: tweet.tweet_content.tweet_actions.retweet,
      title: "Retweet",
      color: state[1] ? "#1df040" : "#6E767D",
    },
    {
      logo: (
        <Like
          Csvg={state[2] ? "#f8358a22" : ""}
          color={state[2] ? "#f8358a" : "#6E767D"}
          like={action}
        />
      ),
      nbr:
        tweet.tweet_content.tweet_actions.state ||
        tweet.tweet_content.tweet_actions.react[
          tweet.tweet_content.tweet_actions.react.length - 1
        ] == "k"
          ? tweet.tweet_content.tweet_actions.react
          : Number(tweet.tweet_content.tweet_actions.react) + 1,
      title: "Like",
      color: state[2] ? "#f8358a" : "#6E767D",
    },
    {
      logo: (
        <Share
          Csvg={state[3] ? "#1d52f022" : ""}
          color={state[3] ? "#1d52f0" : "#6E767D"}
        />
      ),
      title: "Share",
      color: state[3] ? "#1d52f0" : "#6E767D",
    },
  ];

  return (
    <div className="tweet-actions">
      {acts.map((e, i) => (
        <TweetAction
          key={i}
          action={e}
          like={() => handleClick(tweet.id)}
          verify={() => verify(i)}
        />
      ))}
    </div>
  );
}
