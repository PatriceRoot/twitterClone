import { Link } from "react-router-dom";

export default function FollowBody({ value }) {
  return (
    value && (
      <div className="follow-body">
        <Link to={`/${value.tweet_tag}`}>
          <div className="follow-image">
            <img src={value.tweet_avatar} alt="" />
          </div>
        </Link>

        <div className="follow-titles">
          <h4>{value.tweet_content.tweet_authors}</h4>
          <p>{value.tweet_content.tweet_tag}</p>
        </div>
        <div className="follow-button">
          <button>Follow</button>
        </div>
      </div>
    )
  );
}
