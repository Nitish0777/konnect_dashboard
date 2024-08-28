import React, { useEffect, useState } from "react";
import logo from "./images/light.png";
import "./navbar.css";
// import Signin from "../../modal/SignIn";
// import Signup from "../../modal/SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-mode"); // Apply dark theme class
    } else {
      document.body.classList.remove("dark-mode"); // Remove dark theme class
    }
  }, [isDarkTheme]);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const openLanguageMenu = () => {
    const selectBox = document.querySelector(".goog-te-combo");

    // Trigger a click event on the select box
    if (selectBox) {
      selectBox.click();
    }
  };
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <header className="sticky-header">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} className="logoimg" height="70" max-width="200" alt=" " />
        </a>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="signin">
            {/* <Signin /> */}
          </li>
          <li className="signin">
            {/* <Signup /> */}
          </li>
        </ul>
        {/* <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? (
            <FontAwesomeIcon icon={faSun} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          )}
        </div> */}
        <div id="google_element" onClick={openLanguageMenu}></div>
      </div>
    </header>
  );
};

export default Navbar;
// <div className="theme-toggle">
//   <input
//     type="checkbox"
//     id="theme-toggle-checkbox"
//     checked={isDarkTheme}
//     onChange={() => setIsDarkTheme(!isDarkTheme)}
//   />
//   <label for="theme-toggle-checkbox"></label>
// </div>
