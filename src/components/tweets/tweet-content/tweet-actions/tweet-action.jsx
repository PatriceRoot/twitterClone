export default function TweetAction(props) {
  return (
    <div className="tweet-action">
      <img src={props.source} alt="media icon" />
      <span>{props.count}</span>
    </div>
  );
}

// export default function TweetAction({ avatar, verify }) {
//   return (
//     <div
//       title={avatar.title}
//       className="tweet-action"
//       onMouseEnter={verify}
//       onMouseLeave={verify}
//       style={{ color: avatar.color, cursor: "pointer" }}
//     >
//       {avatar.source} {avatar.count && avatar.nbr}
//     </div>
//   );
// }
