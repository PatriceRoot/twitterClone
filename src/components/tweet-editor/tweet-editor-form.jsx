import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import TweetEditorButton from "./tweet-editor-form/tweet-editor-buttons";
import TweetEditorInput from "./tweet-editor-form/tweet-editor-input";
import { TweetContext } from "../../contexts/tweets";
import data from "../../data/initial-data.json";

export default function TweetEditorForm({ tweets, setTweets }) {
  const { register, handleSubmit, reset } = useForm();
  const dataTweets = useContext(TweetContext);
  const input = useRef();

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
        },
        tweet_text: dataForm.text,
      },
    };
    dataTweets.tweets = [newTweet, ...dataTweets.tweets];
    setTweets(dataTweets.tweets);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} reff={input} />
      <TweetEditorButton />
    </form>
  );
}

// import TweetEditorButton from "./tweet-editor-form/tweet-editor-buttons";
// import TweetEditorInput from "./tweet-editor-form/tweet-editor-input";

// export default function TweetEditorForm() {
//   return (
//     <div className="tweet-editor-form">
//       <TweetEditorInput />
//       <TweetEditorButton />
//     </div>
//   );
// }
