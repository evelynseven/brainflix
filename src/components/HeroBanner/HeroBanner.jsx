import "./HeroBanner.scss";
import heroImg from "../../assets/images/Upload-video-preview.jpg";

function HeroBanner() {
  return (
    <div className="hero">
      <video poster={heroImg}></video>
    </div>
  );
}

export default HeroBanner;
