import "./SingleVideo.scss";

function SingleVideo({ title, channel, image }) {
  return (
    <div className="single-video">
      <img src={image} alt="video image" />
      <div className="single-video__info-box">
        <p className="single-video__title">{title}</p>
        <p>{channel}</p>
      </div>
    </div>
  );
}

export default SingleVideo;
