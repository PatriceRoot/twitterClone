import { data } from "../../sidebar-data";
import MenuButton from "./navigation/menu-button";

export default function Navigation() {
  return (
    <div className="navigation">
      {data.map((item, i) => (
        <MenuButton key={i} value={item} />
      ))}
    </div>
  );
}
