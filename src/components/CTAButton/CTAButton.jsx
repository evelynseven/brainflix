import "./CTAButton.scss";

function CTAButton({ clickHandler, buttonIcon, buttonText }) {
  return (
    <div className="CTAButton">
      <img src={buttonIcon} alt="upload icon" />
      <button onClick={clickHandler} className="CTAButton__cta-button">
        {buttonText}
      </button>
    </div>
  );
}

export default CTAButton;
