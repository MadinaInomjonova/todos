import iconSun from "../../assets/images/icon-sun.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="card">
      <h1>TODO</h1>
      <button id="theme-switcher">
        <img src={iconSun} alt="Change color theme" />
      </button>
    </header>
  );
};

export default Header;
