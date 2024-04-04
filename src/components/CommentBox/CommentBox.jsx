import "./CommentBox.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import CTAButton from "../CTAButton/CTAButton";

function CommentBox({
  postComment,
  heroVideo,
  fetchHeroVideo,
  setAllComments,
}) {
  const submitHandler = (e) => {
    e.preventDefault();
    const content = e.target.userComment.value;
    if (content.trim() !== "") {
      const newComment = {
        name: "Evelyn Sun",
        comment: `${content}`,
      };
      postComment(newComment, heroVideo.id).then(() => {
        fetchHeroVideo(heroVideo.id).then((data) => {
          const sortedComments = data.comments.sort(
            (a, b) => b.timestamp - a.timestamp
          );
          setAllComments(sortedComments);
        });
      });
      e.target.userComment.value = "";
    }
  };

  return (
    <div className="comment-post">
      <form onSubmit={submitHandler} className="comment-post__form-content-box">
        <div className="comment-post__img-container">
          <img src={MohanMuruge} alt="Mohan-muruge user photo" />
        </div>
        <div className="comment-post__form-input-box">
          <label htmlFor="userComment">join the conversation</label>
          <div className="comment-post__input-button-wrapper">
            <textarea
              className="comment-post__textarea"
              name="userComment"
              id="userComment"
              placeholder="Add a new comment"
              autoComplete="off"
            ></textarea>
            <div className="comment-post__button-box">
              <CTAButton buttonIcon={commentButton} buttonText="comment" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
