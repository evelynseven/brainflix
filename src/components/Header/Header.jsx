import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import SearchBox from "../SearchBox/SearchBox";
import CTAButton from "../CTAButton/CTAButton";
import { Link } from "react-router-dom";

function Header({}) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img src={brainFlixLogo} alt="BrainFlix logo" />
        </Link>
      </div>
      <div className="header__search-container">
        <SearchBox />
        <img
          className="avatar header__profile-pic-search"
          src={profilePic}
          alt="Mohan muruge profile picture"
        />
      </div>
      <div className="header__uploader-container">
        <Link to="upload" className="header__link">
          <CTAButton buttonIcon={uploadIcon} buttonText="upload" />
        </Link>
      </div>
      <img
        className="avatar header__profile-pic-uploader"
        src={profilePic}
        alt="Mohan muruge profile picture"
      />
    </header>
  );
}

export default Header;
