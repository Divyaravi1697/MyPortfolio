import React from 'react'
import "./SkillCardStyle.css";
import { SiReact, SiBootstrap, SiFigma } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobexd, SiAdobephotoshop } from "react-icons/si";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
            <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
            <abbr title='CSS 3'><TbBrandCss3 className='techLogo' /></abbr>

          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title='ReactJS'><SiReact className='techLogo' /></abbr>
            <abbr title='Bootstrap'><SiBootstrap className='techLogo' /></abbr>
            {/* <abbr title='Git/Github'><DiGit className='techLogo' /></abbr> */}
            <abbr title='TailwindCss'><SiTailwindcss className='techLogo' /></abbr>
            <abbr title='Material UI'><svg fill="rgba(255, 255, 255, 0.8)" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className='techLogo'><g id="SVGRepo_iconCarrier"><title>Material-UI icon</title><path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path></g></svg></abbr>

          </div>
        </div>
        <div className="skill-box">
          <h2>Design Tools</h2>
          <div className="skillset">
            <abbr title='Figma'><SiFigma className='techLogo' /></abbr>
            <abbr title='Adobe Photoshop'><SiAdobephotoshop className='techLogo' /></abbr>
            <abbr title='Adobe XD'><SiAdobexd className='techLogo' /></abbr>
          </div>
        </div>
      </div>
    </>

  )
}
