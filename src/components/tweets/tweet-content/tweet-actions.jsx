import { useContext, useState } from "react";
import Comment from "../../../icons/Comment";
import Like from "../../../icons/Like";
import Retweet from "../../../icons/Retweet";
import Share from "../../../icons/Share";
import TweetAction from "./tweet-actions/tweet-action";
import { TweetContext } from "../../../contexts/tweets";

export default function TweetActions() {
  const [state, setState] = useState(Array(4).fill(false));
  const [action, setAction] = useState(Array(4).fill(true));
  const tweet = useContext(TweetContext);
  const verify = (i) => {
    const newSvg = state.slice();
    newSvg[i] = !newSvg[i];
    setState(newSvg);
  };
  const handleClick = (i) => {
    const newAction = action.slice();
    newAction[i] = !newAction[i];
    setAction(newAction);
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
          Csvg={state[1] && "#1df04022"}
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
          Csvg={state[2] && "#f8358a22"}
          color={state[2] ? "#f8358a" : "#6E767D"}
          like={action[2]}
        />
      ),
      nbr:
        action[2] ||
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
          Csvg={state[3] && "#1d52f022"}
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
          like={() => handleClick(i)}
          verify={() => verify(i)}
        />
      ))}
    </div>
  );
}
