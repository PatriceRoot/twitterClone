import Avatar from "./tweet-editor/avatar";
import TweetEditorForm from "./tweet-editor/tweet-editor-form";

export default function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}
