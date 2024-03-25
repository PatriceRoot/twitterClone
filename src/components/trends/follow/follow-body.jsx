import { Link } from "react-router-dom";

export default function FollowBody({ value }) {
  return (
    <div className="follow-body">
      <Link to={`/${value.link}`}>
        <div className="follow-image">
          <img src={value.image} alt="" />
        </div>
      </Link>

      <div className="follow-titles">
        <h4>{value.title}</h4>
        <p>{value.link}</p>
      </div>
      <div className="follow-button">
        <button>Follow</button>
      </div>
    </div>
  );
}
