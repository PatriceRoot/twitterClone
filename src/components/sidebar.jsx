import Bouton from "./sidebar/bouton";
import Navigation from "./sidebar/navigation";
import ProfileSettings from "./sidebar/profile-settings";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navigation />
      <Bouton />
      <ProfileSettings />
    </div>
  );
}
