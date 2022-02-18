import React from "react"
import data from "../yourdata"
import { FaGraduationCap, FaSuitcase, FaRegListAlt } from "react-icons/fa";
import resume from "../static/Blake_Eriks_2022.pdf"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container variant">
        <div className="about-section">
          <div className="content-wrapper">
            <div className="header">
              <h1>About Me</h1>
              <a 
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                resume
              </a>
            </div>
            <div className="content">
              <div className="section">
                <div className="left">
                  <div className="sub-section">
                    <h2>
                      Software Engineering Bootcamp
                    </h2>
                    <p>
                      <span className="accent">General Assembly</span>
                    </p>
                  </div>
                  <div className="sub-section">
                    <h2>
                      BS Computer Engineering
                    </h2>
                    <p>
                      <span className="accent">Virginia Tech</span>
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <FaGraduationCap />
                </div>
              </div>
              <div className="section">
                <div className="left">
                  <div className="sub-section">
                    <h2>
                      Mid Level Full-Stack Software Engineer
                    </h2>
                    <p>
                      <span className="accent">VMD Corp </span>- Camp Smith, HI
                    </p>
                  </div>
                  <div className="sub-section">
                    <h2>
                      Software Engineering Intern
                    </h2>
                    <p>
                      <span className="accent">Amazon AWS </span>- Seattle, WA
                    </p>
                  </div>
                  <div className="sub-section">
                    <h2>
                      Software Engineering Intern
                    </h2>
                    <p>
                      <span className="accent">VISA Inc </span>- Highlands Ranch, CO
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <FaSuitcase />
                </div>
              </div>
              <div className="section">
                <div className="left">
                  <div className="sub-section">
                    <p>
                      Following graduation from Virginia Tech, Blake leaned into his interest in developing 
                      applications on the web with a full stack position contracted by the Navy, followed by 
                      an immersive software engineering bootcamp. He's now pursuing a position where his
                      skills will be both utilized and nurtured to continue his professional and intrapersonal
                      growth. Blake is looking for a fast-paced, dynamic environment with emphatic leaders directing
                      a collective vision for all members to strive towards.
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <FaRegListAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
