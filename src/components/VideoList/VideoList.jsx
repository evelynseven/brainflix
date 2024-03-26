import "./VideoList.scss";
import videoData from "../../data/videos.json";
import SingleVideo from "../SingleVideo/SingleVideo";

function VideoList() {
  const videos = videoData;
  const nextVideos = videos.slice(1);

  return (
    <div className="video-list">
      <label>next videos</label>
      {nextVideos.map((video) => {
        return (
          <SingleVideo
            key={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
