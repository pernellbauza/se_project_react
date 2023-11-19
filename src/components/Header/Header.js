import avatarLogo from "../../images/headerAvatar.svg";
import logoImage from "../../images/headerLogo.svg";
import "./Header.css";

const Header = ({ onCreate, city, currentDate }) => {
  return (
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={logoImage} alt="Logo" />
          </div>
          <div className="header__date-and-location">
            <div className="header__date">{currentDate},</div>
            <div className="header__location">{city}</div>
          </div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button
              className="header__button-add-clothes"
              onClick={onCreate}
              type="button"
            >
              + Add Clothes
            </button>
          </div>
          <h3 className="header__user-name">Terrence Tegegne</h3>
          <div>
            <img src={avatarLogo} alt="Avatar" />
          </div>
        </div>
      </header>
  );
};

export default Header;
