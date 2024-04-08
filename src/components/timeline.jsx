import React, { useContext, useState } from "react";
import Header from "./header";
import TweetEditor from "./tweet-editor";
import Tweets from "./tweets";
import { TweetContext } from "../contexts/tweets";

export default function Timeline() {
  const tweet = useContext(TweetContext);
  const [tab, setTab] = useState(tweet.tweets);
  return (
    <div className="timeline">
      <Header />
      <TweetEditor tweets={tab} setTweets={setTab} />
      <Tweets tweets={tweet.tweets} />
    </div>
  );
}
