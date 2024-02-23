import TweetTitle from "./tweet-body/tweet-title"
import TweetText from "./tweet-body/tweet-text"
import TweetImage from "./tweet-body/tweet-image"


export default function TweetBody() {
    return (
        <div className="tweet-body">
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>
    )
}