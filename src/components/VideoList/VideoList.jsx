import "./VideoList.scss";
import videoData from "../../data/videos.json";
import SingleVideo from "../SingleVideo/SingleVideo";

function VideoList({ setHeroFn, heroVideoID }) {
  const videos = videoData;
  const nextVideos = videos.filter((video) => video.id !== heroVideoID);

  return (
    <div className="video-list">
      <label>next videos</label>
      {nextVideos.map((video) => {
        return (
          <SingleVideo
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            setHeroFn={setHeroFn}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
