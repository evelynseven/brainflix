import "./CommentBox.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import CTAButton from "../CTAButton/CTAButton";

function CommentBox() {
  return (
    <div class="comment-box">
      <form class="comment-box__form-content-box">
        <div class="comment-box__img-container">
          <img src={MohanMuruge} alt="Mohan-muruge user photo" />
        </div>
        <div class="comment-box__form-input-box">
          <div>
            <label for="userComment">join the conversation</label>
            <textarea
              class="comment-box__textarea"
              name="userComment"
              id="userComment"
              placeholder="Add a new comment"
              autocomplete="off"
            ></textarea>
          </div>
          <div class="comment-box__button-box">
            <CTAButton buttonIcon={commentButton} buttonText="comment" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
