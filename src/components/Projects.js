import React from "react"
import data from "../yourdata"

const Projects = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h1 id="projects">Projects</h1>
          {data.projects.map(({title, para, img, tools, url, repo, blog}, index) => (
            <div className="project">
              <div className="details">
                <h2>
                  {title}
                </h2>
                <p className="text">{para}</p>
                <h3>
                  Built With
                </h3>
                <div className="tools">
                  {tools.map( (tool, index) => (
                    <div className="tool">
                      {tool + (index !== tools.length - 1 ? " |" : "")}&nbsp;
                    </div>
                  ))}
                </div>
                <div className="links">
                  <a
                    href={url ? url : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    Live
                  </a>
                  <a
                    href={repo ? repo : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    Repo
                  </a>
                  {blog &&
                    <a
                      href={blog ? blog : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn"
                    >
                      Blog
                    </a>
                  }
                </div>
              </div>
              <div className="img-wrapper">
                <img src={img}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
