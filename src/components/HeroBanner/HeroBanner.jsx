import "./HeroBanner.scss";

function HeroBanner({ heroVideo }) {
  return (
    <div className="hero">
      <video poster={heroVideo.image} src={heroVideo.video} controls></video>
    </div>
  );
}

export default HeroBanner;
