import TweetEditorButton from "./tweet-editor-form/tweet-editor-buttons";
import TweetEditorInput from "./tweet-editor-form/tweet-editor-input";

export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButton />
    </div>
  );
}
