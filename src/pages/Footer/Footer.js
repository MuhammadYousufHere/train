import "./Footer.scss";
import apple from "../../assets/apple.png";
import gp from "../../assets/google_play.png";
import logo from "../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const social = [
  { id: 1, icon: faInstagram, path: "/" },
  { id: 2, icon: faFacebook, path: "/" },
  { id: 3, icon: faTwitter, path: "/" },
  { id: 4, icon: faLinkedinIn, path: "/" },
  { id: 5, icon: faYoutube, path: "/" },
];
const navlinks = [
  { path: "/", title: "Login" },
  { path: "/", title: "Manage Bookings" },
  { path: "/", title: "Blog" },
  { path: "/", title: "For Business" },
];
function scrollToTop(smooth = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}
const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div className="col left">
          <div className="logo-box">
            <a href="/" className="logo">
              <img src={logo} alt="connecto" />
            </a>
            <nav className="nav-mob">
              <ul>
                {navlinks.map(({ title, path }, i) => {
                  return (
                    <li key={i}>
                      <Link to={path}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="bottom">
            <h1>Social Media</h1>
            <ul>
              {social.map(({ icon, path, id }) => (
                <li key={id}>
                  <a href={path}>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col right">
          <div className="back-top">
            <h1 onClick={() => scrollToTop(true)}>Back to Top</h1>
          </div>
          <div className="store">
            <div className="go">
              <img src={gp} alt="play-store" />
            </div>
            <div className="go">
              <img src={apple} alt="apple-store" />
            </div>
            <div className="social-links">
              <h2>Social Media:</h2>
              <ul>
                {social.map(({ icon, path, id }) => (
                  <li key={id}>
                    <a href={path}>
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
