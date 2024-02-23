import TweetBody from "./tweet-content/tweet-body"
import TweetActions from "./tweet-content/tweet-actions"

export default function TweetContent(){
    return (
        <div className="tweet-content">
            <TweetBody />
            <TweetActions />
        </div>
    )
}