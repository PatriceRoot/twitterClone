import PageTitle from "./../components/header/page-title";
import TopTweets from "./../components/header/top-tweets";

export default function Header() {
  return (
    <div className="header">
      <PageTitle />
      <TopTweets />
    </div>
  );
}
