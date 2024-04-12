// import TweetTitleAuthor from "./tweet-title/tweet-title-author";
import { Link } from "react-router-dom";
import TweetTitleAuthor from "./tweet-title/tweet-title-author";
import TweetTitleDetails from "./tweet-title/tweet-title-details";

export default function TweetTitle({ authors, tag, time }) {
  return (
    <Link
      to={`/${tag}`}
      className="tweet-title"
      style={{ color: "white", textDecoration: "none" }}
    >
      <TweetTitleAuthor authors={authors} />
      <TweetTitleDetails tag={tag} time={time} />
    </Link>
  );
}
