import "./ScrubbingControl.scss";
import scrubIcon from "../../assets/icons/scrub.svg";

function ScrubbingControl({ duration }) {
  return (
    <div className="scrubbing-control">
      <div className="scrubbing-control__scrubbar-container">
        <div className="scrubbing-control__duration-bar"></div>
        <div className="scrubbing-control__buffering-bar"></div>
        <div className="scrubbing-control__playback-bar"></div>
        <img
          className="scrubbing-control__scrub-icon"
          src={scrubIcon}
          alt="scrub icon"
        />
      </div>
      <div className="scrubbing-control__time-container">
        <p>0:00 / {duration}</p>
      </div>
    </div>
  );
}

export default ScrubbingControl;
