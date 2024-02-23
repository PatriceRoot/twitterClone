import TweetTitleAuthor from "./tweet-title/tweet-title-author";
import TweetTitleDetails from "./tweet-title/tweet-title-details";

export default function TweetText() {
  return (
    <div className="tweet-title">
      <TweetTitleAuthor />
      <TweetTitleDetails />
    </div>
  );
}
