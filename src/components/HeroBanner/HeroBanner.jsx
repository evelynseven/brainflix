import "./HeroBanner.scss";

function HeroBanner({ heroVideo }) {
  return (
    <div className="hero">
      <video poster={heroVideo.image} controls></video>
    </div>
  );
}

export default HeroBanner;
