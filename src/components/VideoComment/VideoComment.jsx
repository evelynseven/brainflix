import { useEffect, useState } from "react";
import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import "./VideoComment.scss";

function VideoComment({
  heroVideo,
  postComment,
  submitHandler,
  deleteHandler,
}) {
  const sortedComments = heroVideo.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const [allComments, setAllComments] = useState(sortedComments);

  useEffect(() => {
    setAllComments(sortedComments);
  }, [heroVideo]);

  return (
    <div className="video-comment">
      <h3>{allComments.length} comments</h3>
      <CommentBox
        heroVideo={heroVideo}
        postComment={postComment}
        submitHandler={submitHandler}
      />
      {allComments.map((comment) => {
        return (
          <SingleComment
            heroVideo={heroVideo}
            singleComment={comment}
            key={comment.id}
            deleteHandler={deleteHandler}
          />
        );
      })}
      <hr />
    </div>
  );
}

export default VideoComment;
