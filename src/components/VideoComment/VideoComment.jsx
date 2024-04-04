import { useEffect, useState } from "react";
import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import "./VideoComment.scss";

function VideoComment({ heroVideo, fetchHeroVideo, postComment }) {
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
        fetchHeroVideo={fetchHeroVideo}
        setAllComments={setAllComments}
      />
      {allComments.map((comment) => {
        return <SingleComment singleComment={comment} key={comment.id} />;
      })}
      <hr />
    </div>
  );
}

export default VideoComment;
