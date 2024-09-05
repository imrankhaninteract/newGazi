import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const elemToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };

    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");
    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    if (header && goTopBtn) {
      window.addEventListener("scroll", function () {
        if (window.scrollY >= 10) {
          header.classList.add("active");
          goTopBtn.classList.add("active");
        } else {
          header.classList.remove("active");
          goTopBtn.classList.remove("active");
        }
      });
    }

    if (navToggleBtn && navbar) {
      navToggleBtn.addEventListener("click", function () {
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
      });
    }

    if (toggleBtnBox && toggleBtns.length > 0 && skillsBox) {
      toggleBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          elemToggleFunc(toggleBtnBox);
          toggleBtns.forEach((btn) => elemToggleFunc(btn));
          elemToggleFunc(skillsBox);
        });
      });
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", function () {
        elemToggleFunc(themeToggleBtn);

        if (themeToggleBtn.classList.contains("active")) {
          document.body.classList.remove("dark_theme");
          document.body.classList.add("light_theme");
          localStorage.setItem("theme", "light_theme");
        } else {
          document.body.classList.add("dark_theme");
          document.body.classList.remove("light_theme");
          localStorage.setItem("theme", "dark_theme");
        }
      });

      // Apply last selected theme from localStorage
      if (localStorage.getItem("theme") === "light_theme") {
        themeToggleBtn.classList.add("active");
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
      } else {
        themeToggleBtn.classList.remove("active");
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
      }
    }

  }, []);

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <h1 className="h1 logo">
            <a href="#">Gazi<span>.</span></a>
          </h1>

          <div className="navbar-actions">
            <button className="theme-btn" aria-label="Change Theme" title="Change Theme" data-theme-btn>
              <span className="icon"></span>
            </button>
          </div>

          <button className="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link">Home.</a></li>
              <li><a href="#portfolio" className="navbar-link">Portfolio.</a></li>
              <li><a href="#about" className="navbar-link">About.</a></li>
              <li><a href="#skills" className="navbar-link">Skills.</a></li>
              <li><a href="#contact" className="navbar-link">Contact.</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
