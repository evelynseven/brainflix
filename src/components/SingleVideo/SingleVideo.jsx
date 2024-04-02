import { Link } from "react-router-dom";
import "./SingleVideo.scss";

function SingleVideo({ id, title, channel, image }) {
  return (
    <Link to={`/video/${id}`} className="link">
      <div className="single-video">
        <img src={image} alt="video image" />

        <div className="single-video__info-box">
          <p className="single-video__title">{title}</p>
          <p>{channel}</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleVideo;
