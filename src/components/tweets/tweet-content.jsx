import TweetBody from "./tweet-content/tweet-body"
import TweetActions from "./tweet-content/tweet-actions"

export default function TweetContent({content}){
    return (
        <div className="tweet-content">
            <TweetBody avatar={content}/>
            <TweetActions avatar={content?.tweet_actions}/>
        </div>
    )
}