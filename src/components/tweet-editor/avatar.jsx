import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/tweets";

export default function Avatar() {
  const avatar = useContext(Context);
  return (
    <Link to={`/${avatar["current"].userName}`} className="avatar">
      <img src={avatar["current"].src} alt="Profil d'utilisateur" />
    </Link>
  );
}
