import { useContext } from "react";
import { Link } from "react-router-dom";
import { TweetContext } from "../../contexts/tweets";

export default function Avatar() {
  const avatar = useContext(TweetContext);
  console.log(avatar["current-user"].src);
  return (
    <Link to={`/${avatar["current-user"].userName}`} className="avatar">
      <img src={avatar["current-user"].src} alt="Profil d'utilisateur" />
    </Link>
  );
}

// import { Link } from "react-router-dom";
// import ProfilePhoto from "../../assets/images/profile.png";

// export default function Avatar({ username }) {
//   return (
//     <Link to={`/bradley_`}>
//       <img className="avatar" src={ProfilePhoto} alt="avatar" />
//     </Link>
//   );
// }
