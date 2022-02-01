import React from "react"
import data from "../yourdata"
import heroImg from "../images/hero.jpg"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <img src={heroImg} className="hero-img"/>
          <div className="img-overlay"></div>
          <div className="heading-wrapper">
            <h2>
              Hi, I'm <span className="accent">{data.name}{" "}</span>
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className="heading-main">
              <h1>
                {data.headerTagline[0]}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]}
              </h1>
            </div>
            <a
              href={`mailto:${
                data.contactEmail
              }`}
              className="primary-btn"
              >
              CONNECT WITH ME
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
