import { useState } from "react";

export default function TweetAction(props) {
  const [state, setState] = useState(false);
  function handleState() {
    setState(!state);
  }
  return (
    <div
      onMouseEnter={handleState}
      onMouseLeave={handleState}
      className="tweet-action"
    >
      {state ? props.onsource : props.source}
      <span>{props.count}</span>
    </div>
  );
}
