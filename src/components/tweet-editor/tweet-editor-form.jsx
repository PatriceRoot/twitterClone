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
      user: data["current-user"],
      content: dataForm,
      actions: {
        reply: 0,
        retweet: 0,
        react: 0,
      },
    };
    dataTweets.tweets = [newTweet, ...dataTweets.tweets];
    setTweets(dataTweets.tweets);
    reset();
  };
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButton />
    </div>
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
