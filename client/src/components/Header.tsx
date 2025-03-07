import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import Logo from "../../public/images/Grimpette.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="banner">
        <img
          className="banner-img"
          src="./images/header_climbing.jpg"
          alt="Trois personnes en train de grimper"
        />
        <div className="banner-text">
          <img className="logo" src={Logo} alt="Logo du site" />
          <h2 className="bannerSubtitle">Grimpons ensemble !</h2>
        </div>

        {/* Menu Burger */}
        <input
          type="checkbox"
          id="toggle"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label htmlFor="toggle" className="hamburger">
          <div className="top-bun" />
          <div className="meat" />
          <div className="bottom-bun" />
        </label>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <div className="nav-wrapper">
            <ul>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/grimpeavecmoi" onClick={() => setMenuOpen(false)}>
                  Grimpe avec moi
                </Link>
              </li>
              <li>
                <Link to="/evenements" onClick={() => setMenuOpen(false)}>
                  Les événements
                </Link>
              </li>
              <li>
                <Link to="/articles" onClick={() => setMenuOpen(false)}>
                  Les articles
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
