import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
import Instagram from "../../assets/insta-white.svg";
import YouTube from "../../assets/yt-white.svg";
import Facebook from "../../assets/facebook-white.svg";
import Twitter from "../../assets/twitter-white.svg";
import Caret from "../../assets/caret-down.svg";
import User from "../../assets/user.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Like from "../../assets/like.svg";
import "./nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="top-nav">
          <div>
            <div className="tel-section">
              <div className="tel">
                <img src={Phone} alt="telephone" />
                <p>(225) 555-0118</p>
              </div>
              <div className="mail">
                <img src={Mail} alt="envelope" />
                <p>michelle.rivera@example.com</p>
              </div>
            </div>

            <p className="nav-text-center">
              Follow Us and get a chance to win 80% off
            </p>

            <div className="top-nav-socials">
              <p>Follow Us :</p>
              <div>
                <img src={Instagram} alt="Instagram icon" />
                <img src={YouTube} alt="Youtube Logo" />
                <img src={Facebook} alt="Facebook icon" />
                <img src={Twitter} alt="Twitter Icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="first-half">
            <p className="text-logo">Bandage</p>

            <div className="nav-link-container">
              <ul>
                <li>Home</li>
                <li>
                  Shop <img src={Caret} alt="caret" />
                </li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
              </ul>
            </div>
          </div>

          <div className="second-half">
            <div className="nav-user">
              <img src={User} alt="User icon" />
              <p>Login/Register</p>
            </div>
            <img src={Search} alt="Magnifying glass icon" />
            <div className="cart">
              <img src={Cart} alt="Basket cart" />
              <p>1</p>
            </div>
            <div className="like">
              <img src={Like} alt="Heart icon" />
              <p>1</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
