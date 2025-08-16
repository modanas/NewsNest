import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#f0f0f0";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{
        background: darkMode
          ? "rgba(18, 18, 18, 0.85)"
          : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontWeight: 700,
            letterSpacing: "2px",
            color: darkMode ? "#f0f0f0" : "#212529",
            transition: "color 0.3s ease",
          }}
        >
          NewsNest
        </Link>

        {/* Navbar collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ gap: "1rem", display: "flex", flexWrap: "wrap" }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/business", label: "Business" },
              { to: "/entertainment", label: "Entertainment" },
              { to: "/general", label: "General" },
              { to: "/health", label: "Health" },
              { to: "/science", label: "Science" },
              { to: "/sports", label: "Sports" },
              { to: "/technology", label: "Technology" },
            ].map(({ to, label }) => (
              <li key={to} className="nav-item">
                <Link
                  className="nav-link"
                  to={to}
                  style={{
                    borderRadius: "8px",
                    padding: "6px 12px",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    color: darkMode ? "#e0e0e0" : "#212529",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode
                      ? "rgba(255, 255, 255, 0.12)"
                      : "rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.color = darkMode ? "#fff" : "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = darkMode ? "#e0e0e0" : "#212529";
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          style={{
            fontSize: "1.5rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            color: darkMode ? "#f0f0f0" : "#212529",
            transition: "color 0.3s ease",
            padding: "6px 10px",
            borderRadius: "50%",
            marginLeft: "auto",
          }}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="order-lg-last"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginLeft: "0.5rem" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
