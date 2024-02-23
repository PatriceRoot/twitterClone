export default function TweetTitleDetails({tag, time}){
    return (
        <div className="tweet-title-details">
            <span>{tag} . {time}</span>
        </div>
    )
}