import "./SingleComment.scss";
import dynamicTS from "../DynamicTimestamp/DynamicTimestamp";
import deleteIcon from "../../assets/icons/icon-delete.svg";

function SingleComment({
  heroVideo,
  singleComment,
  deleteComment,
  updateComments,
}) {
  const clickHandler = () => {
    deleteComment(heroVideo.id, singleComment.id).then(() => {
      updateComments();
    });
  };

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
        <div onClick={clickHandler} className="comment-box__info-third-row">
          <img src={deleteIcon} alt="delete icon" />
        </div>
      </div>
    </div>
  );
}

export default SingleComment;
