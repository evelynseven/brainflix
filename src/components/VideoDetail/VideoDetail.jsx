import "./VideoDetail.scss";
import VideoKeyInfo from "../VideoKeyInfo/VideoKeyInfo";

function VideoDetail({ heroVideo }) {
  return (
    <div className="video-detail">
      <h1>{heroVideo.title}</h1>
      <VideoKeyInfo heroVideo={heroVideo} />
      <p>{heroVideo.description}</p>
    </div>
  );
}

export default VideoDetail;
