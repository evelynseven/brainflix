import "./HeroBanner.scss";
import playIcon from "../../assets/icons/play.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";
import ScrubbingControl from "../ScrubbingControl/ScrubbingControl";

function HeroBanner({ heroSrc, heroImg, duration }) {
  return (
    <div className="hero">
      <video poster={heroImg} src={heroSrc} controls></video>
      {/* <div className="hero__icons-container"> */}
      {/* <div className="hero__play-icon-box">
          <img className="hero__play-icon" src={playIcon} alt="play icon" />
        </div> */}
      {/* <ScrubbingControl duration={duration} /> */}
      {/* <div className="hero__right-bottom-icon-box">
          <img
            className="hero__full-screen-icon"
            src={fullScreenIcon}
            alt="full screen icon"
          />
          <img
            className="hero__volume-icon"
            src={volumeUpIcon}
            alt="volume up icon"
          />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default HeroBanner;
