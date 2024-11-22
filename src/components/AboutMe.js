import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I’m <span>Divya </span>, a dedicated <span>UI/UX designer and developer</span> with over 5+ years of experience in creating engaging web designs, seamless user experiences, and ensuring product quality through detailed QA processes. I am done with the <span>diploma in computer science</span>.<br /><br /> My expertise includes front-end technologies like HTML, CSS, JavaScript, Bootstrap, and jQuery, alongside design tools like Adobe Photoshop, Adobe XD and Figma to craft intuitive and visually appealing interfaces. I’m also proficient in manual testing, ensuring high-quality and bug-free solutions. I’m passionate about blending creativity with functionality to deliver user-centered digital experiences that drive results.

      </div>
      <div className="profile-photo">
        {/* <div className="heading"> About Me</div> */}
        {/* <img className="img" src={myProfile} alt="Profile"></img> */}
      </div>
      <div className="name">Divya</div>
    </div>
  );
}
