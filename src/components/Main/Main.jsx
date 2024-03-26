import "./Main.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import VideoDetail from "../VideoDetail/VideoDetail";
import videoData from "../../data/video-details.json";
import VideoComment from "../VideoComment/VideoComment";
import VideoList from "../VideoList/VideoList";

function Main() {
  const videos = videoData;
  const heroVideo = videos[0];

  return (
    <main className="main">
      <HeroBanner heroImg={heroVideo.image} duration={heroVideo.duration} />
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
        <VideoList />
      </div>
    </main>
  );
}

export default Main;
