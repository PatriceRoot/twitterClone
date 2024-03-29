import React from "react";
import Header from "./header";
import TweetEditor from "./tweet-editor";
import Tweets from "./tweets";

export default function Timeline() {
  return (
    <div>
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  );
}
