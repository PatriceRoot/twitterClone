import TweetAction from "./tweet-actions/tweet-action";
import Reply from "../../../assets/icons/Reply.svg";
import Retweet from "../../../assets/icons/Retweet.svg";
import React from "../../../assets/icons/React.svg";
import Share from "../../../assets/icons/Share.svg";

export default function TweetActions() {
  return (
    <div className="tweet-actions">
      <TweetAction source={Reply} count="19"/>
      <TweetAction source={Retweet} count="48"/>
      <TweetAction source={React} count="482"/>
      <TweetAction source={Share} />
    </div>
  );
}
