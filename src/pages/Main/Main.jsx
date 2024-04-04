import "./Main.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoComment from "../../components/VideoComment/VideoComment";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Main({
  videos,
  heroVideo,
  setHeroVideo,
  fetchHeroVideo,
  postComment,
}) {
  //change the heroVideo detail when the url has changed
  const { heroVideoID } = useParams();
  useEffect(() => {
    fetchHeroVideo(heroVideoID).then((data) => {
      setHeroVideo(data);
    });
  }, [heroVideoID]);

  return (
    <main className="main">
      <HeroBanner heroVideo={heroVideo} />
      <div className="main__container">
        <div className="main__main-content">
          <VideoDetail heroVideo={heroVideo} />
          <VideoComment
            heroVideo={heroVideo}
            postComment={postComment}
            fetchHeroVideo={fetchHeroVideo}
          />
        </div>
        <VideoList videos={videos} heroVideo={heroVideo} />
      </div>
    </main>
  );
}

export default Main;
