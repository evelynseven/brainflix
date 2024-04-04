import "./UploadForm.scss";
import CTAButton from "../CTAButton/CTAButton";
import publishIcon from "../../assets/icons/publish.svg";
import imgPreview from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const UploadForm = ({ publishHandler }) => {
  return (
    <div className="upload-form">
      <h1>Upload Video</h1>
      <div className="upload-form__content-wrapper">
        <div className="upload-form__img-wrapper">
          <label>VIDEO THUMBNAIL</label>
          <img
            className="upload-form__img-preview"
            src={imgPreview}
            alt="Upload video preview"
          />
        </div>
        <div className="upload-form__input-wrapper">
          <label>TITLE YOUR VIDEO</label>
          <input type="text" placeholder="Add a title to your video" />
          <label>ADD A VIDEO DESCRIPTION</label>
          <textarea
            cols="30"
            rows="4"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </div>
      <div className="upload-form__button-wrapper">
        <Link to="/">
          <button className="upload-form__secondary-button-above">
            Cancel
          </button>
        </Link>
        <CTAButton
          clickHandler={publishHandler}
          buttonIcon={publishIcon}
          buttonText="publish"
        />
        <Link to="/">
          <button className="upload-form__secondary-button-below">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadForm;
