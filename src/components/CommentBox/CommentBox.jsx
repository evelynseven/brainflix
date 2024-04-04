import "./CommentBox.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import CTAButton from "../CTAButton/CTAButton";
import axios from "axios";

function CommentBox({ baseUrl, apiKey, heroVideo, fetchHeroVideo }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const content = e.target.userComment.value;
    if (content.trim() !== "") {
      try {
        await axios.post(
          `${baseUrl}/videos/${heroVideo.id}/comments?api_key=${apiKey}`,
          { name: "Evelyn Sun", comment: `${content}` }
        );
        console.log(1123);
        fetchHeroVideo();
        console.log(321);
      } catch (error) {
        console.log(error);
      }
      e.target.userComment.value = "";
    } else {
      //notify the user
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
