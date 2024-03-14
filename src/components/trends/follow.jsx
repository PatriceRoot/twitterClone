import { followData } from "../../follow-data";
import FollowBody from "./follow/follow-body";
import FollowMore from "./follow/follow-more";
import FollowTitle from "./follow/follow-title";

export default function Follow() {
  return (
    <div className="follow">
      <FollowTitle />
      {followData.map((item, i) => (
        <FollowBody key={i} value={item} />
      ))}
      <FollowMore />
    </div>
  );
}
