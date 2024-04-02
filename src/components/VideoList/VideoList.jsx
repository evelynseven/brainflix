import "./VideoList.scss";
import SingleVideo from "../SingleVideo/SingleVideo";

function VideoList({ videos, heroVideoID }) {
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
          />
        );
      })}
    </div>
  );
}

export default VideoList;
