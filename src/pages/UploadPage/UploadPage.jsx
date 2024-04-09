import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import PopUpMsg from "../../components/PopUpMsg/PopUpMsg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postVideo } from "../../api/Utils";
import { v4 as uuidv4 } from "uuid";

const UploadPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const publishHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const uuid = uuidv4();
    const timestamp = new Date();
    if (title.trim() !== "" && desc.trim() !== "") {
      const newVideo = {
        id: uuid,
        title: title,
        channel: "Evelyn Sun",
        image: "",
        description: desc,
        views: "0",
        likes: "0",
        duration: "04:28",
        video: "",
        timestamp: timestamp,
        comments: [],
      };
      postVideo(newVideo);
      console.log(newVideo);
    }
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
