import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import "./VideoComment.scss";

function VideoComment({ baseUrl, apiKey, heroVideo, fetchHeroVideo }) {
  const allComments = heroVideo.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <div className="video-comment">
      <h3>{allComments.length} comments</h3>
      <CommentBox
        baseUrl={baseUrl}
        apiKey={apiKey}
        heroVideo={heroVideo}
        fetchHeroVideo={fetchHeroVideo}
      />
      {allComments.map((comment) => {
        return <SingleComment singleComment={comment} key={comment.id} />;
      })}
      <hr />
    </div>
  );
}

export default VideoComment;
