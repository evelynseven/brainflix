import "./VideoKeyInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import dynamicTS from "../DynamicTimestamp/DynamicTimestamp";

function VideoKeyInfo({ heroVideo }) {
  return (
    <div className="video-keyinfo">
      <div className="video-keyinfo__left-col">
        <p className="video-keyinfo__channel">By {heroVideo.channel}</p>
        <p className="video-keyinfo__grey-text">
          {dynamicTS(heroVideo.timestamp, new Date())}
        </p>
      </div>
      <div className="video-keyinfo__icons-numbers">
        <div className="video-keyinfo__icon-number-wrapper">
          <img src={viewsIcon} alt="views icon" />
          <p className="video-keyinfo__grey-text video-keyinfo__number">
            {heroVideo.views}
          </p>
        </div>
        <div className="video-keyinfo__icon-number-wrapper">
          <img src={likesIcon} alt="views icon" />
          <p className="video-keyinfo__grey-text video-keyinfo__number">
            {heroVideo.likes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoKeyInfo;
