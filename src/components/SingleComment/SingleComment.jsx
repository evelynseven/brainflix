import "./SingleComment.scss";
import dynamicTS from "../DynamicTimestamp/DynamicTimestamp";

function SingleComment({ singleComment }) {
  return (
    <div className="comment-box">
      <div className="comment-box__default-user-img"></div>
      <div className="comment-box__info-box">
        <div className="comment-box__info-first-row">
          <p className="comment-box__name">{singleComment.name}</p>
          <p className="comment-box__time">
            {dynamicTS(singleComment.timestamp, new Date())}
          </p>
        </div>
        <p className="comment-box__info-second-row">{singleComment.comment}</p>
      </div>
    </div>
  );
}

export default SingleComment;
