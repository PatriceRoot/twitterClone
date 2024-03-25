import { Link } from "react-router-dom";
import ProfilePhoto from "../../assets/images/profile.png";

export default function Avatar({ username }) {
  return (
    <Link to={`/bradley_`}>
      <img className="avatar" src={ProfilePhoto} alt="avatar" />;
    </Link>
  );
}
