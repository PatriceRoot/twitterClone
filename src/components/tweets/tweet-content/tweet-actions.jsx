import TweetAction from "./tweet-actions/tweet-action";
import Reply from "../../../assets/icons/Reply.svg";
import Retweet from "../../../assets/icons/Retweet.svg";
import React from "../../../assets/icons/React.svg";
import Share from "../../../assets/icons/Share.svg";

export default function TweetActions({avatar}) {
  return (
    <div className="tweet-actions">
      <TweetAction source={Reply} count={avatar?.reply}/>
      <TweetAction source={Retweet} count={avatar?.retweet}/>
      <TweetAction source={React} count={avatar?.react}/>
      <TweetAction source={Share} />
    </div>
  );
}
