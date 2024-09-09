import React, { useState, useEffect } from "react";
import './Header.css';
import heroBanner from './pictures/hero-banner.png'

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [isThemeDark, setThemeDark] = useState(() => {
    return localStorage.getItem("theme") !== "light_theme";
  });

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
    document.body.classList.remove("dark_theme", "light_theme");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Set initial theme based on localStorage, default to dark theme
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark_theme";
    document.body.classList.add(theme);
  }, []);

  return (
    <>
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

      <main>
        <article className="container">
          <section className="hero" id="home">
            <figure className="hero-banner">
              <picture>
                <img
                  src={heroBanner}
                  alt="A man in a blue shirt with a happy "
                  className="w-100"
                />
              </picture>
            </figure>

            <div className="hero-content">
              <h2 className="h2 hero-title">Gazi Interior Design</h2>
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
            </div>

            <ul className="hero-social-list">
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                  <div className="tooltip">Facebook</div>
                </a>
              </li>
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                  <div className="tooltip">Twitter</div>
                </a>
              </li>
              <li>
                <a href="#" className="hero-social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <div className="tooltip">LinkedIn</div>
                </a>
              </li>
            </ul>

            <a href="#stats" className="scroll-down">
              Scroll
            </a>
          </section>
        </article>
      </main>
    </>
  );
};

export default Header;
