import Button from "./tweet-editor-button/button";
import TweetEditorAction from "./tweet-editor-button/tweet-editor-actions";

export default function TweetEditorButton() {
  return (
    <div className="tweet-editor-buttons">
      <Button />
      <TweetEditorAction />
    </div>
  );
}
