import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import PopUpMsg from "../../components/PopUpMsg/PopUpMsg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const publishHandler = () => {
    setIsVisible(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [isVisible]);

  return (
    <div className="upload-page">
      <UploadForm publishHandler={publishHandler} />
      {isVisible && <PopUpMsg message="Video uploaded!" />}
    </div>
  );
};

export default UploadPage;
