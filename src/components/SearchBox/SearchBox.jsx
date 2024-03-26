import "./SearchBox.scss";
import searchIcon from "../../assets/icons/search.svg";

function SearchBox() {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="search icon" />
      <input type="search" placeholder="Search" />
    </div>
  );
}

export default SearchBox;
