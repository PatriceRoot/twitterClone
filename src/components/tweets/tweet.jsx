import TweetAvatar from "./tweet-avatar";
import TweetContent from "./tweet-content";

export default function Tweet({ value }) {
  return (
    <div className="tweet">
      <TweetAvatar
        avatar={value?.tweet_avatar}
        username={value?.tweet_content.tweet_tag}
      />
      <TweetContent content={value?.tweet_content} />
    </div>
  );
}
