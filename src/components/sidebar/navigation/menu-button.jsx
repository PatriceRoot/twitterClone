import { Link } from "react-router-dom";

export default function MenuButton({ value }) {
  return (
    <Link
      to={value.path}
      className="menu-button "
      style={{ color: "white", textDecoration: "none" }}
    >
      <img src={value.logo} alt="" />
      <h2>{value.title}</h2>
    </Link>
  );
}
