import React from "react";
import NavBar from "../Components/NavBar";
import myImg from "../assets/WhatsApp Image 2025-07-25 at 6.56.10 PM.jpeg";
import MyProjectBtn from "../Components/MyProjectBtn";
import "../Globel Css/About.css";

const About = () => {
  return (
    <>
      <NavBar />
      <h1
        style={{
          background: "burlywood",
          color: "purple",
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        About me
      </h1>
      <div className="aboutContainer">
        <div>
          <img
            style={{ width: 280, height: 440, marginLeft: 50, marginTop: 50 }}
            src={myImg}
            alt="img Loading...."
          />
        </div>
        <div className="aboutContent">
          <h1 style={{ color: "green" }}>Zeeshan-Fronted-Developer </h1>
          <p style={{ color: "purple" }}>
            "I’m a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript, <br /> and modern frameworks like React. I’m
            eager to apply my skills in real-world projects <br /> and
            continuously learn to deliver user-friendly, responsive web
            experiences."
          </p>
          <MyProjectBtn />
        </div>
      </div>
    </>
  );
};

export default About;
