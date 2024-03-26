import CommentBox from "../CommentBox/CommentBox";
import "./VideoComment.scss";

function VideoComment({ comments }) {
  const allComments = comments;

  return (
    <div className="video-comment">
      <h3>{allComments.length} comments</h3>
      <CommentBox />
    </div>
  );
}

export default VideoComment;
