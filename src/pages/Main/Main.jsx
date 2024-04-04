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

  useEffect(() => {
    fetchVideos().then((data) => {
      setVideos(data);
      let mainVideoID = data[0].id;
      fetchHeroVideo(mainVideoID).then((data) => {
        setHeroVideo(data);
      });
    });
  }, []);

  //change the heroVideo when the url has changed
  useEffect(() => {
    if (heroVideoID !== undefined) {
      fetchHeroVideo(heroVideoID).then((data) => {
        setHeroVideo(data);
      });
    } else {
      // console.log(videos[0].id);
    }
  }, [heroVideoID]);

  if (!heroVideo) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="main">
      <HeroBanner heroVideo={heroVideo} />
      <div className="main__container">
        <div className="main__main-content">
          <VideoDetail heroVideo={heroVideo} />
          <VideoComment
            heroVideo={heroVideo}
            postComment={postComment}
            deleteComment={deleteComment}
          />
        </div>
        <VideoList videos={videos} heroVideo={heroVideo} />
      </div>
    </main>
  );
}

export default Main;
