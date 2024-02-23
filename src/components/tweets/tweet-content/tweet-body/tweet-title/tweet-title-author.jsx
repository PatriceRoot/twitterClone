import Group from '../../../../../assets/images/Group.png';

export default function TweetTitleAuthor({authors}){
    return (
        <div className="tweet-title-author">
            <span>{authors}</span>
            <span><img src={Group} alt="logo" /></span>
            
        </div>
    )
}