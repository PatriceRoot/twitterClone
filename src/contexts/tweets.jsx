import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

export const Context = createContext(null);
export const TweetContext = ({ children }) => {
  const { data: tweetData } = useFetch("http://localhost:3000/tweets");

  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch("http://localhost:3000/current-user");
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  return (
    tweets &&
    current && (
      <Context.Provider value={{ tweets, setTweets, current }}>
        {children}
      </Context.Provider>
    )
  );
};
