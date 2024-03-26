import "./Main.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import VideoDetail from "../VideoDetail/VideoDetail";
import videoData from "../../data/video-details.json";

function Main() {
  const videos = videoData;
  const heroVideo = videos[0];

  return (
    <main>
      <HeroBanner heroImg={heroVideo.image} duration={heroVideo.duration} />
      <VideoDetail
        title={heroVideo.title}
        channel={heroVideo.channel}
        timestamp={heroVideo.timestamp}
        views={heroVideo.views}
        likes={heroVideo.likes}
        description={heroVideo.description}
      />
    </main>
  );
}

export default Main;
