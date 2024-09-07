import React, { useEffect, useState } from "react";
import logo from "./images/light.png";
import "./navbar.css";
import { Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const [isDarkTheme] = useState(false);
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

  function handleclick() {
    navigate("/signup");
  }
  function handleclick1() {
    navigate("/signin");
  }
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };

  const openLanguageMenu = () => {
    const selectBox = document.querySelector(".goog-te-combo");

    // Trigger a click event on the select box
    if (selectBox) {
      selectBox.click();
    }
  };

  return (
    <header className="sticky-header">
      <div className="container">
        <a href="/" className="logo">
          <img
            src={logo}
            className="logoimg"
            height="70"
            max-width="200"
            alt=" "
          />
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
          <li className="signin">{/* <Signin /> */}</li>
          <li className="signin">{/* <Signup /> */}</li>
        </ul>
        {/* <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? (
            <FontAwesomeIcon icon={faSun} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          )}
        </div> */}
        <div id="google_element" onClick={openLanguageMenu}></div>
        <Box style={{ width: "20%" }} display="flex">
          {auth?.user ? (
            <Button
              style={{
                borderColor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "white" : "black",
                fontSize: "14px",
                margin: "6px",
                borderWidth: "1.5px",
                height: "50%",
                width: "50%",
              }}
              variant="outlined"
              size="large"
              onClick={() => {
                setAuth(false);
                handleLogout();
              }}
            >
              Log Out
            </Button>
          ) : (
            <>
              <Button
                style={{
                  borderColor:
                    theme.palette.mode === "dark" ? "white" : "black",
                  color: theme.palette.mode === "dark" ? "white" : "black",
                  fontSize: "14px",
                  margin: "6px",
                  borderWidth: "1.5px",
                  height: "50%",
                  width: "200%",
                  marginRight: "20px",
                }}
                variant="outlined"
                size="large"
                onClick={handleclick}
              >
                Sign Up
              </Button>
              <Button
                style={{
                  borderColor:
                    theme.palette.mode === "dark" ? "white" : "black",
                  color: theme.palette.mode === "dark" ? "white" : "black",
                  fontSize: "14px",
                  margin: "6px",
                  borderWidth: "1.5px",
                  height: "50%",
                  width: "200%",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
                variant="outlined"
                size="large"
                onClick={handleclick1}
              >
                Sign In
              </Button>
            </>
          )}
        </Box>
      </div>
    </header>
  );
};

export default Navbar;
