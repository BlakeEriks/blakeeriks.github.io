import React from "react"
import heroImg from "../images/hero.png"
import mobileHeroImg from "../images/mobile-hero.png"
import useWindowDimensions from "../util/useWindowDimensions"
import data from "../yourdata"

const Header = () => {

  const {isMobile} = useWindowDimensions()

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          { isMobile ? 
            <img src={mobileHeroImg} className="hero-img" alt="hero"/>
          :
            <img src={heroImg} className="hero-img" alt="hero"/>
          }
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
                &nbsp;{data.headerTagline[0]}&nbsp;
              </h1>
              <h1>
                &nbsp;{data.headerTagline[1]}&nbsp;
              </h1>
              <h1>
                &nbsp;{data.headerTagline[2]}&nbsp;
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
