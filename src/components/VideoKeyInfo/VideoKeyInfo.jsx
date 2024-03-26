import "./VideoKeyInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import dynamicTS from "../DynamicTimestamp/DynamicTimestamp";

function VideoKeyInfo({ channel, timestamp, views, likes }) {
  return (
    <div className="video-keyinfo">
      <div className="video-keyinfo__left-col">
        <p className="video-keyinfo__channel">By {channel}</p>
        <p className="video-keyinfo__grey-text">
          {dynamicTS(timestamp, new Date())}
        </p>
      </div>
      <div className="video-keyinfo__icons-numbers">
        <div className="video-keyinfo__icon-number-wrapper">
          <img src={viewsIcon} alt="views icon" />
          <p className="video-keyinfo__grey-text video-keyinfo__number">
            {views}
          </p>
        </div>
        <div className="video-keyinfo__icon-number-wrapper">
          <img src={likesIcon} alt="views icon" />
          <p className="video-keyinfo__grey-text video-keyinfo__number">
            {likes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoKeyInfo;
