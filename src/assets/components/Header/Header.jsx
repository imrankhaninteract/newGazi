import React, { useState, useEffect } from "react";
import './Header.css';

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [isThemeDark, setThemeDark] = useState(
    localStorage.getItem("theme") !== "light_theme" // Default to dark theme
  );

  // Toggle element class
  const toggleElement = (setStateFunc) => {
    setStateFunc((prevState) => !prevState);
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle theme toggle and save to localStorage
  const handleThemeToggle = () => {
    const newTheme = isThemeDark ? "light_theme" : "dark_theme";
    setThemeDark(!isThemeDark);
    document.body.classList.toggle("dark_theme", !isThemeDark);
    document.body.classList.toggle("light_theme", isThemeDark);
    localStorage.setItem("theme", newTheme);
  };

  // Set initial theme based on localStorage, default to dark theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "light_theme") {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme"); // Default to dark theme
    }
  }, []);

  return (
    <header className={`header ${isHeaderSticky ? "active" : ""}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">Gazi<span>.</span></a>
        </h1>

        <div className="navbar-actions">
          <button
            className={`theme-btn ${!isThemeDark ? "active" : ""}`} // Button is active when it's light
            aria-label="Change Theme"
            title="Change Theme"
            onClick={handleThemeToggle}
            data-theme-btn
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={() => toggleElement(setNavbarActive)}
          data-nav-toggle-btn
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">Home.</a>
            </li>
            <li>
              <a href="#about" className="navbar-link">About.</a>
            </li>
            <li>
              <a href="#skills" className="navbar-link">Skills.</a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link">Portfolio.</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">Contact.</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

