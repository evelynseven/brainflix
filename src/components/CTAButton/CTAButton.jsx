import "./CTAButton.scss";

function CTAButton({ buttonIcon, buttonText }) {
  return (
    <div className="CTAButton">
      <img src={buttonIcon} alt="upload icon" />
      <button className="cta-button">{buttonText}</button>
    </div>
  );
}

export default CTAButton;
