import TweetTitle from "./tweet-body/tweet-title";
import TweetText from "./tweet-body/tweet-text";
import TweetImage from "./tweet-body/tweet-image";

export default function TweetBody({ avatar }) {
  return (
    <div className="tweet-body">
      <TweetTitle
        authors={avatar?.tweet_authors}
        tag={avatar?.tweet_tag}
        time={avatar?.tweet_time}
      />
      <TweetText text={avatar?.tweet_text} />
      {avatar && avatar.tweet_image && (
        <TweetImage image={avatar?.tweet_image} />
      )}
    </div>
  );
}
