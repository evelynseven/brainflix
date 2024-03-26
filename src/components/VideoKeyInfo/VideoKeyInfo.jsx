import "./VideoKeyInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoKeyInfo({ channel, timestamp, views, likes }) {
  function dynamicTS(commentTimestamp, currentTimestamp) {
    let dynamicTimestamp;

    let commentTime = new Date(commentTimestamp);
    let currentTime = new Date(currentTimestamp);

    const yearsDifference = Math.abs(
      currentTime.getFullYear() - commentTime.getFullYear()
    );
    const monthsDifference = Math.abs(
      currentTime.getMonth() - commentTime.getMonth()
    );
    const daysDifference = Math.abs(
      currentTime.getDate() - commentTime.getDate()
    );
    const hoursDifference = Math.abs(
      currentTime.getHours() - commentTime.getHours()
    );
    const minutesDifference = Math.abs(
      currentTime.getMinutes() - commentTime.getMinutes()
    );
    const secondsDifference = Math.abs(
      currentTime.getSeconds() - commentTime.getSeconds()
    );

    if (yearsDifference < 1) {
      if (monthsDifference < 1) {
        if (daysDifference < 1) {
          if (hoursDifference < 1) {
            if (minutesDifference < 1) {
              dynamicTimestamp = `${secondsDifference} second(s) ago`;
            } else {
              dynamicTimestamp = `${minutesDifference} minute(s) ago`;
            }
          } else {
            dynamicTimestamp = `${hoursDifference} hour(s) ago`;
          }
        } else {
          dynamicTimestamp = `${daysDifference} day(s) ago`;
        }
      } else {
        dynamicTimestamp = `${monthsDifference} month(s) ago`;
      }
    } else {
      dynamicTimestamp = `${yearsDifference} year(s) ago`;
    }

    return dynamicTimestamp;
  }

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
