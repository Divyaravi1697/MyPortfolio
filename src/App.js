import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Sleep tracking Application"
          projectDesc="Designed to monitors sleep patterns, provides insights, and suggests personalized tips for better rest. With real-time tracking, smart alarms, and visual reports, it helps users achieve optimal sleep health effortlessly."
          projectImg={require('./images/projectSleepTracking.jpg')}
        />

        <ProjectCard
          projectTitle="GCP Dashboard"
          projectDesc="Designed to provide a centralized view of Google Cloud resources, metrics, and usage insights. It features real-time monitoring, interactive charts, and management tools for streamlined cloud operations."
          projectImg={require('./images/projectGCP.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="Shopping Web Application"
          projectDesc="Designed and developed to offer a seamless online shopping experience with a modern UI and responsive design. It includes features like product browsing, secure checkout, and user account management, optimized for speed and accessibility"
          projectImg={require('./images/projectShopping.png')}
        />
        <AboutMe id='about' />
        <SkillCard id='skills' />
        <Footer />
      </div>
    </>
  );
}

export default App;
