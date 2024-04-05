import "./Main.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoComment from "../../components/VideoComment/VideoComment";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchVideos,
  fetchHeroVideo,
  postComment,
  deleteComment,
} from "../../api/Utils";

function Main() {
  const [videos, setVideos] = useState([]);
  const [heroVideo, setHeroVideo] = useState();
  const { heroVideoID } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const content = e.target.userComment.value;
    if (content.trim() !== "") {
      const newComment = {
        name: "Evelyn Sun",
        comment: `${content}`,
      };
      postComment(newComment, heroVideo.id).then(() => {
        fetchHeroVideo(heroVideo.id)
          .then((data) => {
            setHeroVideo(data);
          })
          .catch((error) => {
            console.error(error);
          });
        e.target.userComment.value = "";
      });
    }
  };

  const deleteHandler = (singleComment) => {
    deleteComment(heroVideo.id, singleComment.id)
      .then(() => {
        fetchHeroVideo(heroVideo.id)
          .then((data) => {
            setHeroVideo(data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchVideos()
      .then((data) => {
        setVideos(data);
        fetchHeroVideo(data[0].id)
          .then((data) => {
            setHeroVideo(data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //change the heroVideo when the url has changed
  useEffect(() => {
    if (videos.length > 0) {
      const mainVideoID = heroVideoID ? heroVideoID : videos[0].id;
      fetchHeroVideo(mainVideoID).then((data) => {
        setHeroVideo(data);
      });
    }
  }, [heroVideoID]);

  return (
    heroVideo && (
      <main className="main">
        <HeroBanner heroVideo={heroVideo} />
        <div className="main__container">
          <div className="main__main-content">
            <VideoDetail heroVideo={heroVideo} />
            <VideoComment
              heroVideo={heroVideo}
              postComment={postComment}
              submitHandler={submitHandler}
              deleteHandler={deleteHandler}
            />
          </div>
          <VideoList videos={videos} heroVideo={heroVideo} />
        </div>
      </main>
    )
  );
}

export default Main;
