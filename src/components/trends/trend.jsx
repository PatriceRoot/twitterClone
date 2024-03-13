import { trendsData } from "../../trends-data";
import TrendsBody from "./trend/trend-body";
import TrendTitle from "./trend/trend-title";

export default function Trend() {
  return (
    <div className="trends-body">
        <TrendTitle />
      {trendsData.map((item, i) => (
        <TrendsBody key={i} value={item} />
      ))}
    </div>
  );
}