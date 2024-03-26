import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import "./VideoComment.scss";

function VideoComment({ comments }) {
  const allComments = comments.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="video-comment">
      <h3>{allComments.length} comments</h3>
      <CommentBox />
      <hr />
      {comments.map((comment) => {
        return (
          <SingleComment
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

export default VideoComment;
