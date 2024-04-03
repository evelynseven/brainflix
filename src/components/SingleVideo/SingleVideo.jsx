import { Link } from "react-router-dom";
import "./SingleVideo.scss";

function SingleVideo({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="link">
      <div className="single-video">
        <img src={video.image} alt="video poster" />
        <div className="single-video__info-box">
          <p className="single-video__title">{video.title}</p>
          <p>{video.channel}</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleVideo;
