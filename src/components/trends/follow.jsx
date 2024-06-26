// import { followData } from "../../follow-data";
import FollowBody from "./follow/follow-body";
import FollowMore from "./follow/follow-more";
import FollowTitle from "./follow/follow-title";
import Json from "../../data/initial-data.json";

export default function Follow() {
  return (
    <div className="follow">
      <FollowTitle />
      {Json.tweets.map((item, i) => (
        <FollowBody key={i} value={item} />
      ))}
      <FollowMore />
    </div>
  );
}
