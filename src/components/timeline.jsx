import React, { useContext, useState, useEffect } from "react";
import Header from "./header";
import TweetEditor from "./tweet-editor";
import Tweets from "./tweets";
import { TweetContext } from "../contexts/tweets";
import axios from "axios";

export default function Timeline() {
  const tweet = useContext(TweetContext);
  const [tab, setTab] = useState(tweet.tweets);
  useEffect(() => console.log(tab), [tab]);
  return (
    <div className="timeline">
      <Header />
      <TweetEditor tweets={tab} setTweets={setTab} />
      <Tweets tweets={tweet.tweets} />
    </div>
  );
}
