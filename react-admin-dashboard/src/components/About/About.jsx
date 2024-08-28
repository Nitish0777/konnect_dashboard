import React from "react";
import "./about.css"; // Import your CSS file here
import AboutBox from "./AboutBox"; // Import the AboutBox component

const About = () => {
  const aboutBoxes = [
    {
      heading: "Find a Project - Intra university",
      imageSrc: "https://i.postimg.cc/65QxYYzh/001234.png",
      description:
        "For the students as well as mentors, who are searching for some projects to work on, well this is the right place!",
    },
    {
      heading: "Find the Mentor - Intra university",
      imageSrc: "https://i.postimg.cc/65QxYYzh/001234.png",
      description:
        "For the students who have an idea in their mind and need a guide/mentor to work with, we provide a solution here!",
    },
    {
      heading: "Showcase Projects - Inter university",
      imageSrc: "https://i.postimg.cc/65QxYYzh/001234.png",
      description:
        "Detailed information about showcasing projects between universities...",
    },
  ];

  return (
    <section className="about-us" id="about-us">
      <div className="container2">
        <h2>Why to Konnect with us?</h2>
        <p>
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
          Konnect is a platform for students as well as mentors to build,
          collaborate on projects or even just explore! Our aim is to connect
          every university in India through one platform to grow and innovate!
        </p>
        <div className="about-boxes">
          {aboutBoxes.map((box, index) => (
            <AboutBox
              key={index}
              heading={box.heading}
              imageSrc={box.imageSrc}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
