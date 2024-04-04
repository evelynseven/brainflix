import { useEffect, useState } from "react";
import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import "./VideoComment.scss";

function VideoComment({
  heroVideo,
  fetchHeroVideo,
  postComment,
  deleteComment,
}) {
  const sortedComments = heroVideo.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const [allComments, setAllComments] = useState(sortedComments);

  const updateComments = () => {
    fetchHeroVideo(heroVideo.id).then((data) => {
      const sortedComments = data.comments.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      setAllComments(sortedComments);
    });
  };

  return (
    <div className="video-comment">
      <h3>{allComments.length} comments</h3>
      <CommentBox
        heroVideo={heroVideo}
        postComment={postComment}
        updateComments={updateComments}
      />
      {allComments.map((comment) => {
        return (
          <SingleComment
            heroVideo={heroVideo}
            singleComment={comment}
            key={comment.id}
            deleteComment={deleteComment}
            updateComments={updateComments}
          />
        );
      })}
      <hr />
    </div>
  );
}

export default VideoComment;
