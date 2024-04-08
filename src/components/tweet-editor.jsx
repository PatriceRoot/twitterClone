import Avatar from "./tweet-editor/avatar";
import TweetEditorForm from "./tweet-editor/tweet-editor-form";

export default function TweetEditor({ tweets, setTweets }) {
  return (
    <div className="tweet-editor">
      <Avatar />
      <TweetEditorForm tweets={tweets} setTweets={setTweets} />
    </div>
  );
}
