import "./Main.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoComment from "../../components/VideoComment/VideoComment";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Main({
  baseUrl,
  apiKey,
  videos,
  heroVideo,
  heroVideoID,
  setHeroVideoID,
  fetchHeroVideo,
}) {
  const { heroVideoID: newHeroID } = useParams();

  useEffect(() => {
    if (newHeroID && newHeroID !== heroVideoID) {
      setHeroVideoID(newHeroID);
    }
  }, [heroVideoID, newHeroID]);

  return (
    <main className="main">
      <HeroBanner heroVideo={heroVideo} />
      <div className="main__container">
        <div className="main__main-content">
          <VideoDetail heroVideo={heroVideo} />
          <VideoComment
            heroVideo={heroVideo}
            baseUrl={baseUrl}
            apiKey={apiKey}
            fetchHeroVideo={fetchHeroVideo}
          />
        </div>
        <VideoList videos={videos} heroVideoID={heroVideo.id} />
      </div>
    </main>
  );
}

export default Main;
