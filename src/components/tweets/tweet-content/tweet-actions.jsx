import TweetAction from "./tweet-actions/tweet-action";
import Reply from "../../../assets/icons/Reply.svg";
import Retweet from "../../../assets/icons/Retweet.svg";
import React from "../../../assets/icons/React.svg";
import Share from "../../../assets/icons/Share.svg";
import { useState } from "react";

export default function TweetActions({ avatar }) {
  return (
    <div className="tweet-actions">
      <TweetAction source={Reply} count={avatar?.reply} />
      <TweetAction source={Retweet} count={avatar?.retweet} />
      <TweetAction source={React} count={avatar?.react} />
      <TweetAction source={Share} />
    </div>
  );
}

// export default function TweetActions({ actions }) {
//   const [state, setState] = useState(Array(4).fill(false));
//   const verify = (i) => {
//     const newSvg = state.slice();
//     newSvg[i] = !newSvg[i];
//     setState(newSvg);
//   };
//   const acts = [
//     {
//       source: (
//         <Reply
//           Csvg={state[0] ? "#1d52f022" : ""}
//           color={state[0] ? "#1d52f0" : "#6E767D"}
//         />
//       ),
//       count: actions.reply,
//       title: "Reply",
//       color: state[0] ? "#1d52f0" : "#6E767D",
//     },
//     {
//       source: (
//         <React
//           Csvg={state[1] && "#1df04022"}
//           color={state[1] ? "#1df040" : "#6E767D"}
//         />
//       ),
//       count: actions.react,
//       title: "React",
//       color: state[1] ? "#1df040" : "#6E767D",
//     },
//     {
//       source: (
//         <Retweet
//           Csvg={state[2] && "#f8358a22"}
//           color={state[2] ? "#f8358a" : "#6E767D"}
//         />
//       ),
//       count: actions.retweet,
//       title: "Retweet",
//       color: state[2] ? "#f8358a" : "#6E767D",
//     },
//     {
//       source: (
//         <Share
//           Csvg={state[3] && "#1d52f022"}
//           color={state[3] ? "#1d52f0" : "#6E767D"}
//         />
//       ),
//       title: "Share",
//       color: state[3] ? "#1d52f0" : "#6E767D",
//     },
//   ];

//   return (
//     <div className="tweet-actions">
//       {acts.map((e, i) => (
//         <TweetAction key={i} action={e} verify={() => verify(i)} />
//       ))}
//     </div>
//   );
// }
