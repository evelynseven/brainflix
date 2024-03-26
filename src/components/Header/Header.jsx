import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import SearchBox from "../SearchBox/SearchBox";
import Uploader from "../Uploader/Uploader";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={brainFlixLogo} alt="BrainFlix logo" />
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
        <Uploader />
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
