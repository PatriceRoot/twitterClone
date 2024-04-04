// import { useContext } from "react";
// import { useState } from "react";

// export default function TweetAction(props) {
//   const [state, setState] = useState(false);
//   const [back, setBack] = useState(white);
//   function handleState() {
//     setState(!state);
//   }

//   return (
//     <div
//       onMouseEnter={handleState}
//       onMouseLeave={handleState}
//       className="tweet-action"
//     >
//       {state ? props.onsource : props.source}
//       <span style={{ color: state && props.color }}>{props.count}</span>
//     </div>
//   );
// }

export default function TweetAction({ action, verify, like }) {
  return (
    <button
      title={action.title}
      className="tweet-action"
      onMouseEnter={verify}
      onMouseLeave={verify}
      onClick={like}
      style={{ color: action.color }}
    >
      {action.logo} {action.nbr && action.nbr}
    </button>
  );
}
