import "./Uploader.scss";
import uploadIcon from "../../assets/icons/upload.svg";

function Uploader() {
  return (
    <div className="uploader">
      <img src={uploadIcon} alt="upload icon" />
      <button className="cta-button">upload</button>
    </div>
  );
}

export default Uploader;
