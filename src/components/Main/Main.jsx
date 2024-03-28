import "./Main.scss";
import { useState } from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import VideoDetail from "../VideoDetail/VideoDetail";
import videoData from "../../data/video-details.json";
import VideoComment from "../VideoComment/VideoComment";
import VideoList from "../VideoList/VideoList";

function Main() {
  const videos = videoData;
  const [heroVideo, setHeroVideo] = useState(videos[0]);
  const [heroVideoID, setHeroVideoID] = useState(videos[0].id);

  const setHero = (id) => {
    let newHero = videos.find((video) => video.id === id);
    setHeroVideo(newHero);
    setHeroVideoID(id);
  };

  return (
    <main className="main">
      <HeroBanner
        heroSrc={heroVideo.video}
        heroImg={heroVideo.image}
        duration={heroVideo.duration}
      />
      <div className="main__container">
        <div className="main__main-content">
          <VideoDetail
            title={heroVideo.title}
            channel={heroVideo.channel}
            timestamp={heroVideo.timestamp}
            views={heroVideo.views}
            likes={heroVideo.likes}
            description={heroVideo.description}
          />
          <VideoComment comments={heroVideo.comments} />
        </div>
        <VideoList setHeroFn={setHero} heroVideoID={heroVideoID} />
      </div>
    </main>
  );
}

export default Main;
