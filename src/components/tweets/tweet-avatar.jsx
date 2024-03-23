import { Link } from "react-router-dom";

export default function TweetAvatar({ avatar, username }) {
  return (
    <Link to={`/${username}`}>
      <img className="tweet-avatar" src={avatar} />
    </Link>
  );
}
