import React from "react";
import "./hero.css"; // Import your CSS file here
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="content" id="home">
      <div className="container1">
        <div className="info">
          <h1 className="head">Let's Konnect!</h1>
          <p>
            Konnect is a platform for students as well as mentors to build,
            <br />
            collaborate on projects or even just explore! Our aim is to
            <br />
            connect every university in India through one platform to grow and
            innovate! Konnect is a platform for students as well as mentors to
            build, collaborate on projects or even just explore! Our aim is to
            connect every university in India through one platform to grow and
            <br />
            innovate! Konnect is a platform for students as well as mentors to
            build, collaborate on projects or even just explore! Our aim is to
            <br />
            connect every university in India through one platform to grow and
            innovate!
          </p>
          <button className="getstart1" onClick={()=>{
            navigate("/signup")
          }}>
            Get Started
          </button>
        </div>
        <div className="image">
          <img
            className="heroimg"
            src="https://i.postimg.cc/65QxYYzh/001234.png"
            alt="Hero"
            style={{borderRadius:"50%",paddingRight:"70px",height:"500px",width:"2000px"}}
          />
        </div>
      </div>
      </div>
  );
};

export default Hero;
