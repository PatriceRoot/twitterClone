import { useForm } from "react-hook-form";
import { useContext, useRef, useEffectffect } from "react";
import TweetEditorButton from "./tweet-editor-form/tweet-editor-buttons";
import TweetEditorInput from "./tweet-editor-form/tweet-editor-input";
import { TweetContext } from "../../contexts/tweets";
import data from "../../data/initial-data.json";
import axios from "axios";

export default function TweetEditorForm({ tweets, setTweets }) {
  const { register, handleSubmit, reset } = useForm();
  const dataTweets = useContext(TweetContext);
  const input = useRef();
  const { current } = useContext(TweetContext);

  const onSubmit = (dataForm) => {
    const newTweet = {
      id: "00",
      tweet_avatar: data["current-user"].src,
      tweet_content: {
        tweet_authors: data["current-user"].name,
        tweet_tag: "@" + data["current-user"].userName,
        tweet_time: data["current-user"].time,
        tweet_actions: {
          reply: "0",
          retweet: "0",
          react: "0",
          share: "",
          state: "true",
        },
        tweet_text: dataForm.text,
      },
    };
    // dataTweets.tweets = [newTweet, ...dataTweets.tweets];
    // setTweets(dataTweets.tweets);
    // reset();
    axios
      .post("http://localhost:3000/tweets", newTweet)
      .then((response) => setTweets({ ...tweets, ...response.data }))
      .catch((error) => console.error(error));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} reff={input} />
      <TweetEditorButton />
    </form>
  );
}
