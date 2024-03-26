import "./SingleComment.scss";
import dynamicTS from "../DynamicTimestamp/DynamicTimestamp";

function SingleComment({ name, timestamp, comment }) {
  return (
    <div className="comment-box">
      <div className="comment-box__default-user-img"></div>
      <div className="comment-box__info-box">
        <div className="comment-box__info-first-row">
          <p className="comment-box__name">{name}</p>
          <p>{dynamicTS(timestamp, new Date())}</p>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default SingleComment;
