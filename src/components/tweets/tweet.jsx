import TweetAvatar from "./tweet-avatar";
import TweetContent from "./tweet-content";

export default function Tweet() {
  return (
    <div className="tweet">
      <TweetAvatar />
      <TweetContent />
    </div>
  );
}
