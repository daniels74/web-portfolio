import React from "react";
import "./About.css";
import myface from "../../images/profilePic.jpg";
// import Footer from "../../components/Footer/Footer"

const About = () => {
  return (
    <div className="about-content">
      <div className="box_container">
        <div className="seg">
          <div className="about-img-container">
            <img className="about-img" src={myface} alt="" />
          </div>
          <div className="description">
            <p>
              Im a motivated, skilled, and patient indivual powered by an
              emmense ammount of curiousity in the storage and usage of data. I
              spend my time learning about web development, but I also have an
              intrest in the world of cryptocurrency and other forms of
              investments.
            </p>
          </div>
        </div>
      </div>

      <div className="expo-container">
        <div className="experience">
          <h3>Experienced Languages</h3>
          <ul className="expo-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Node</li>
            <li>CSS</li>
            <li>C++</li>
            <li>Python</li>
            <li>Assembly</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Experienced Extensions</h3>
          <div className="expo-list">
            <h4>NPM</h4>
            <h4>ChartJS</h4>
            <h4>Styled Components</h4>
            <h4>Axios</h4>
            <h4>Redux</h4>
            <h4>Github</h4>
            <h4>Auth0</h4>
          </div>
        </div>
      </div>

      {/* <div className="footer-container">
        <Footer/>
        </div> */}
    </div>
  );
};

export default About;
