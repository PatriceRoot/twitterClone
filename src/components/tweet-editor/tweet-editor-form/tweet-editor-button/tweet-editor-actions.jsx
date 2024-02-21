import Media from '../../../../assets/icons/Media.svg';
import Gif from '../../../../assets/icons/Gif.svg';
import Lists from '../../../../assets/icons/Lists.svg';
import Emoji from '../../../../assets/icons/Emoji.svg';
import Schedule from '../../../../assets/icons/Schedule.svg';

export default function TweetEditorAction() {
  return (
    <div className="tweet-editor-actions">
      <img src={Media} alt="media icon" />
      <img src={Gif} alt="gif icon" />
      <img src={Lists} alt="lists icon" />
      <img src={Emoji} alt="emoji icon" />
      <img src={Schedule} alt="schedule icon" />
    </div>
  );
}
