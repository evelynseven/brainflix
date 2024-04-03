import "./VideoList.scss";
import SingleVideo from "../SingleVideo/SingleVideo";

function VideoList({ videos, heroVideoID }) {
  const nextVideos = videos.filter((video) => video.id !== heroVideoID);

  return (
    <div className="video-list">
      <label>next videos</label>
      {nextVideos.map((video) => {
        return <SingleVideo key={video.id} video={video} />;
      })}
    </div>
  );
}

export default VideoList;
