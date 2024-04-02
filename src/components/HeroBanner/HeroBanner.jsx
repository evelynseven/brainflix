import "./HeroBanner.scss";
import playIcon from "../../assets/icons/play.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";
import ScrubbingControl from "../ScrubbingControl/ScrubbingControl";

function HeroBanner({ heroVideo }) {
  return (
    <div className="hero">
      <video poster={heroVideo.image} src={heroVideo.video} controls></video>
    </div>
  );
}

export default HeroBanner;
