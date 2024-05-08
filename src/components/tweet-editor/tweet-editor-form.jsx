import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import TweetEditorButton from "./tweet-editor-form/tweet-editor-buttons";
import TweetEditorInput from "./tweet-editor-form/tweet-editor-input";
import { Context } from "../../contexts/tweets";
import axios from "axios";

export default function TweetEditorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const input = useRef();
  const { tweets, setTweets } = useContext(Context);

  const onSubmit = (dataForm) => {
    const newTweet = {
      tweet_avatar: "/profile.png",
      tweet_content: {
        tweet_authors: "Bradley Ortiz",
        tweet_tag: "@bradley_",
        tweet_time: "now",
        tweet_actions: {
          reply: "0",
          retweet: "0",
          react: "0",
          share: "",
          state: "true",
        },
        ...dataForm,
      },
    };

    axios
      .post("http://localhost:5000/tweets", newTweet)
      .then((response) => {
        setTweets([...tweets, { ...response.data }]);
      })
      .catch((error) => console.error(error));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} reff={input} />
      {errors.text && (
        <p className="text-red-600 italic">{errors.text.message}</p>
      )}
      <TweetEditorButton />
    </form>
  );
}
