export default function TweetAction(props) {
  return (
    <div className="tweet-action">
      <img src={props.source} alt="media icon" />
      <span>{props.count}</span>
    </div>
  );
}
