import Tweet from "./tweets/tweet";

export default function Tweets() {
  let tweets = [
    {
      id: "00",
      tweet_avatar: "/ProfilePhoto2.png",
      tweet_content: {
        tweet_authors: "CNN",
        tweet_tag: "@CNN",
        tweet_time: "7m",
        tweet_actions: {
          reply: "57",
          retweet: "144",
          react: "184",
          share: "",
        },
        tweet_text:
          "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      },
    },

    {
      id: "01",
      tweet_avatar: "/ProfilePhoto1.png",
      tweet_content: {
        tweet_authors: "The New York Times",
        tweet_tag: "@nytimes",
        tweet_time: "2h",
        tweet_actions: {
          reply: "19",
          retweet: "48",
          react: "482",
          share: "",
        },
        tweet_text:
          "Gardening boomed during the pendemic. Six Black writters share how haw helped them re-establish, and reimagine, a connection to cultivation and the land.",
        tweet_image: "/Post.png",
      },
    },

    {
      id: "02",
      tweet_avatar: "/ProfilePhoto3.png",
      tweet_content: {
        tweet_authors: "Twitter",
        tweet_tag: "@Twitter",
        tweet_time: "Oct 29",
        tweet_actions: {
          reply: "6.8K",
          retweet: "36.6K",
          react: "267.1K",
          share: "",
        },
        tweet_text:
          "BIG NEWS lol jk still Twitter.",
      },
    },

    {
      id: "03",
      tweet_avatar: "/ProfilePhoto3.png",
      tweet_content: {
        tweet_authors: "Twitter",
        tweet_tag: "@Twitter",
        tweet_time: "Oct 4",
        tweet_actions: {
          reply: "118.7K",
          retweet: "785.4K.",
          react: "3.3M",
          share: "",
        },
        tweet_text:
          "Hello litteraly everyone.",
      },
    },

    {
      id: "04",
      tweet_avatar: "/ProfilePhoto3.png",
      tweet_content: {
        tweet_authors: "Twitter",
        tweet_tag: "@Twitter",
        tweet_time: "7m",
        tweet_actions: {
          reply: "57",
          retweet: "144",
          react: "184",
          share: "",
        },
        tweet_text: "Hello litteraly everyone.",
      },
    },
  ];

  return (
    <div className="tweets">
      {tweets.map((item, i) => (
        <Tweet key={i} value={item} />
      ))}
    </div>
  );
}
