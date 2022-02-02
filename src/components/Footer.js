import React from "react"
import { FaEnvelope } from "react-icons/fa"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>Contact</h1>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With ❤ by{" "}
            <a href="https://www.BlakeEriks.dev/">Blake Eriks</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
