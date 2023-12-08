import { useState } from "react";
import { parseWeatherData } from "../../utils/WeatherApi";
import "./Header.css";
import headerLogo from "../../images/headerLogo.svg";
import avatarImage from "../../images/headerAvatar.svg";
import mobileCloseButton from "../../images/Mobile Menu Close Button.svg";
import mobileNavButton from "../../images/Mobile Nav Button.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ city, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";
  const avatar = "";
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };
  //const city = weatherData && weatherData.city ? `, ${weatherData.city}` : '';

  return (
    <header className="header">
      <div className="header__logo-container">
        <div>
          <Link to="/">
            <img className="header__logo" src={headerLogo} alt="Header Logo" />
          </Link>
        </div>

        <div className="header__date-and-location">
          <div className="header__date">{currentDate},</div>
          <div className="header__location">{city}</div>
        </div>
      </div>
      <div className="header__nav">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <Link className="header__username" to="/profile">
          {username}
        </Link>
        <div>
          <img
            className="header__avatar-logo"
            src={avatarImage}
            alt="Avatar Logo"
          />
        </div>
      </div>

      <div
        className={`navigation-container ${
          isMobileMenuOpened ? "mobile-menu-opened" : ""
        }`}
      >
        <button onClick={toggleMobileMenu} className="menu-button">
          {isMobileMenuOpened ? (
            <img
              className="mobile__close-button"
              src={mobileCloseButton}
              alt="Close"
            />
          ) : (
            <img
              className="mobile__nav-button"
              src={mobileNavButton}
              alt="Menu"
            />
          )}
        </button>
        {isMobileMenuOpened && (
          <div className="mobile__menu">
            <div>
              <div className="mobile__avatar-container">
                <div>{username}</div>
                <img
                  className="mobile__avatar-logo"
                  src={avatarImage}
                  alt="Avatar Logo"
                />
              </div>
              <button
                className="mobile__header__button"
                type="text"
                onClick={onCreateModal}
              >
                + Add Clothes
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

