import "./VideoDetail.scss";
import VideoKeyInfo from "../VideoKeyInfo/VideoKeyInfo";

function VideoDetail({ title, channel, timestamp, views, likes, description }) {
  return (
    <div className="video-detail">
      <h1>{title}</h1>
      <VideoKeyInfo
        channel={channel}
        timestamp={timestamp}
        views={views}
        likes={likes}
      />
      <p>{description}</p>
    </div>
  );
}

export default VideoDetail;
