import TweetTitleAuthor from "./tweet-title/tweet-title-author";
import TweetTitleDetails from "./tweet-title/tweet-title-details";

export default function TweetTitle({authors,tag,time}) {
    console.log(authors,tag,time);
  return (
    <div className="tweet-title">
      <TweetTitleAuthor authors={authors}/>
      <TweetTitleDetails tag={tag} time={time}/>
    </div>
  );
}
